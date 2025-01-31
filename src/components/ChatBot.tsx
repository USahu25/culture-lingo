import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { supabase } from "@/integrations/supabase/client"

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
      <div className="flex-1 overflow-auto space-y-4 mb-4">
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
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
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