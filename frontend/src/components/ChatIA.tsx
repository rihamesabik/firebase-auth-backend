import React, { useState, useRef, useEffect } from 'react'; 
import axios from 'axios';

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_API_KEY = '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';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  time: string; 
}

const ChatIA: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getCurrentTime = (): string => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const resetConversation = () => {
    setMessages([]);
    setInput('');
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: Message = { role: 'user', content: input, time: getCurrentTime() };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        OPENROUTER_API_URL,
        {
          model: 'gpt-4o-mini',
          messages: updatedMessages.map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
          stream: false,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          },
        }
      );

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.data.choices[0].message.content,
        time: getCurrentTime(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erreur API OpenRouter:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Désolé, une erreur est survenue.', time: getCurrentTime() }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Chat IA OpenRouter</h2>

      <div style={styles.chatBox}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              ...styles.message,
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.role === 'user' ? '#8e44ad' : '#f3f0ff',
              color: msg.role === 'user' ? 'white' : '#4b4b4b',
              borderTopRightRadius: msg.role === 'user' ? 0 : 20,
              borderTopLeftRadius: msg.role === 'user' ? 20 : 0,
              boxShadow:
                msg.role === 'user'
                  ? '0 2px 12px rgba(142, 68, 173, 0.3)'
                  : '0 2px 8px rgba(0, 0, 0, 0.05)',
              position: 'relative',
            }}
          >
            {msg.content}
            <span style={styles.time}>{msg.time}</span>
          </div>
        ))}
        {loading && <p style={styles.loading}>Chargement...</p>}
        <div ref={messagesEndRef} />
      </div>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Tape ton message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          style={styles.input}
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading} style={styles.button}>
          Envoyer
        </button>

        {/* Icône reset conversation */}
        <button
          onClick={resetConversation}
          disabled={loading}
          style={styles.resetButton}
          title="Réinitialiser la conversation"
        >
          {/* SVG flèche circulaire */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="#8e44ad"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: 600,
    margin: '40px auto',
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: '#faf7ff',
    borderRadius: 20,
    boxShadow: '0 12px 30px rgba(142, 68, 173, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    height: '80vh',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#6f42c1',
    fontWeight: '700',
    fontSize: 26,
  },
  chatBox: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    boxShadow: 'inset 0 0 15px rgba(142, 68, 173, 0.1)',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  message: {
    maxWidth: '70%',
    padding: '14px 24px',
    borderRadius: 20,
    fontSize: 16,
    lineHeight: 1.5,
    wordWrap: 'break-word',
    transition: 'box-shadow 0.3s ease',
  },
  time: {
    position: 'absolute',
    bottom: 4,
    right: 12,
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.3)',
  },
  loading: {
    fontStyle: 'italic',
    color: '#a084c8',
    textAlign: 'center',
    marginTop: 10,
  },
  inputContainer: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  input: {
    flex: 1,
    padding: '14px 20px',
    fontSize: 16,
    borderRadius: 30,
    border: '2px solid #b695d6',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  button: {
    padding: '14px 30px',
    borderRadius: 30,
    backgroundColor: '#8e44ad',
    border: 'none',
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  resetButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 8,
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
  },
};

export default ChatIA;
