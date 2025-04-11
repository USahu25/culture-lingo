
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { supabase } from "@/integrations/supabase/client"
import { useToast } from "@/hooks/use-toast"

interface ChatBotProps {
  region: string | null
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const ChatBot = ({ region }: ChatBotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Welcome to the ${region} learning assistant! How can I help you today?` },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  // Auto-scroll to the bottom of the messages container
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSend = async () => {
    if (!input.trim()) return
    
    setIsLoading(true)
    const userMessage = input
    setInput("")
    
    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])

    try {
      const { data, error } = await supabase.functions.invoke('chat-with-gemini', {
        body: { message: userMessage, region }
      })

      if (error) throw error

      // Add assistant response to chat
      setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
    } catch (error) {
      console.error('Error calling Gemini API:', error)
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again later.",
        variant: "destructive"
      })
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again later.' 
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="p-4 h-[500px] flex flex-col">
      <div className="flex-1 overflow-auto space-y-4 mb-4 pr-2">
        {messages.map((message, index) => (
          <div 
            key={index} 
            className={`p-3 rounded ${
              message.role === 'assistant' 
                ? 'bg-muted' 
                : 'bg-primary/10'
            }`}
          >
            <span className="font-semibold">
              {message.role === 'assistant' ? 'Assistant: ' : 'You: '}
            </span>
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex gap-2">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === "Enter" && !isLoading && handleSend()}
          disabled={isLoading}
        />
        <Button 
          onClick={handleSend} 
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </Button>
      </div>
    </Card>
  )
}

export default ChatBot
