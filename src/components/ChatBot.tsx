import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ChatBotProps {
  region: string | null
}

const ChatBot = ({ region }: ChatBotProps) => {
  const [messages, setMessages] = useState<string[]>([
    `Welcome to the ${region} learning assistant! How can I help you today?`,
  ])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, `You: ${input}`])
    setInput("")
    // Here you would typically integrate with a chat API
    setTimeout(() => {
      setMessages((prev) => [...prev, `Assistant: I'm here to help you learn about ${region}!`])
    }, 1000)
  }

  return (
    <Card className="p-4 h-[500px] flex flex-col">
      <div className="flex-1 overflow-auto space-y-4 mb-4">
        {messages.map((message, index) => (
          <div key={index} className="p-2 rounded bg-muted">
            {message}
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
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </Card>
  )
}

export default ChatBot