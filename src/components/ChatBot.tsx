
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
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
      // Add temporary typing indicator
      setMessages(prev => [...prev, { role: 'assistant', content: '...' }])

      const { data, error } = await supabase.functions.invoke('chat-with-gemini', {
        body: { message: userMessage, region }
      })

      if (error) throw error

      // Replace typing indicator with actual response
      setMessages(prev => prev.slice(0, prev.length - 1).concat({ 
        role: 'assistant', 
        content: data.response 
      }))
    } catch (error) {
      console.error('Error calling Gemini API:', error)
      // Replace typing indicator with error message
      setMessages(prev => prev.slice(0, prev.length - 1).concat({ 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please try again later.' 
      }))
      
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again later.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading && input.trim()) {
      handleSend();
    }
  };

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
            {message.content === '...' ? (
              <span className="inline-flex items-center">
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Thinking...
              </span>
            ) : (
              message.content
            )}
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
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          className="flex-1"
        />
        <Button 
          onClick={handleSend} 
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
              Sending
            </>
          ) : (
            'Send'
          )}
        </Button>
      </div>
    </Card>
  )
}

export default ChatBot
