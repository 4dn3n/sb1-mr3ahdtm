import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../ui/button';
import { Mic, Send } from 'lucide-react';
import { generateResponse } from '../../lib/gpt';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ConversationProps {
  customerType: string;
  context: string;
  onEndCall: () => void;
}

export function Conversation({ customerType, context, onEndCall }: ConversationProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await generateResponse(context, customerType, userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response || '' }]);
    } catch (error) {
      console.error('Error generating response:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3">
              <Mic className="w-5 h-5 animate-pulse text-gray-500" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Tapez votre message..."
            className="flex-1 rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button onClick={handleSend} disabled={isLoading}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}