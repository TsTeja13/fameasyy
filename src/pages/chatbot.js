import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello Farmer! Ask me anything about Organic Farming, Jeevamrutham preparation, or natural pest control.", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSend = (textToSend) => {
    const txt = textToSend || input;
    if (!txt.trim()) return;

    const newMsgs = [...messages, { text: txt, isBot: false }];
    setMessages(newMsgs);
    setInput('');

    setTimeout(() => {
      let reply = "I am looking into this natural remedy for you. For better yields, always ensure rich microbial activity using compost!";
      if (txt.toLowerCase().includes('jeevamrutham')) {
        reply = "To make Jeevamrutham: Mix 10kg Cow Dung, 10L Cow Urine, 2kg Jaggery, 2kg Pulse flour, and a handful of pristine soil in 200L water. Ferment for 5-7 days.";
      } else if (txt.toLowerCase().includes('pest')) {
        reply = "Try 'Agniastra' for pests: Boil neem leaves, tobacco, hot green chillies, and garlic in cow urine. Dilute and spray.";
      }
      setMessages([...newMsgs, { text: reply, isBot: true }]);
    }, 1000);
  };

  const simulateVoice = () => {
    setIsListening(true);
    setTimeout(() => {
      setIsListening(false);
      handleSend("How to prepare Jeevamrutham?");
    }, 2500);
  };

  return (
    <div>
      <div className="header">
        <h1>🗣️ AI Kisaan Mitra</h1>
        <p>Chat & Voice Agro Assistant</p>
      </div>

      <div className="container">
        <div className="card" style={{height: '350px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div style={{overflowY: 'auto', flexGrow: 1, marginBottom: '10px'}}>
            {messages.map((m, i) => (
              <div key={i} style={{
                textAlign: m.isBot ? 'left' : 'right',
                margin: '8px 0'
              }}>
                <span style={{
                  background: m.isBot ? '#e8f5e9' : '#2e7d32',
                  color: m.isBot ? '#333' : 'white',
                  padding: '8px 12px',
                  borderRadius: '12px',
                  display: 'inline-block',
                  maxWidth: '85%',
                  fontSize: '14px'
                }}>
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          <div style={{display: 'flex', gap: '8px'}}>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask in English or Local Language..." 
              style={{flexGrow: 1, padding: '10px', borderRadius: '6px', border: '1px solid #ccc'}}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={() => handleSend()} className="btn" style={{width: 'auto', margin: 0}}>Send</button>
          </div>
        </div>

        {/* Voice Assistant Module */}
        <div className="card" style={{textAlign: 'center'}}>
          <h3>🎙️ Speak to your Assistant</h3>
          <p style={{fontSize: '13px', color: '#666', margin: '5px 0 15px'}}>Tap below and speak comfortably in your regional tongue.</p>
          <button 
            onClick={simulateVoice} 
            className="btn" 
            style={{background: isListening ? '#d32f2f' : '#2e7d32', width: '150px', margin: '0 auto'}}
          >
            {isListening ? "🛑 Listening..." : "🎤 Tap to Talk"}
          </button>
        </div>
      </div>
    </div>
  );
}
