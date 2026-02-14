import { useState } from "react";

function App() {

const [message, setMessage] = useState("");
const [reply, setReply] = useState("");
const [loading, setLoading] = useState(false);

const sendMessage = async () => {

    if(!message) return;

    setLoading(true);

    try {

        const res = await fetch("http://localhost:5000/chat", {
           model: 'google/gemini-3-flash-preview',
            method: "POST",
             messages: [
             {
              role: "user",
               content: "How many r's are in the word 'strawberry'?"
                  }
                      ],
            body: JSON.stringify({ message })
        });

        const data = await res.json();

        setReply(data.choices[0].message.content);

    } catch(err){
        console.log(err);
    }

    setLoading(false);
};

return (
<div style={{padding:"40px"}}>

    <h1>AI Chatbot 🤖</h1>

    <input
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Ask anything..."
    />

    <button onClick={sendMessage}>
        Send
    </button>

    {loading && <p>Thinking... 🤔</p>}

    <h3>{reply}</h3>

</div>
);
}

export default App;
