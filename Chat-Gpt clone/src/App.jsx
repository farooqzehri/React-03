import { useState } from "react";

function App() {

const [message, setMessage] = useState("");
const [reply, setReply] = useState("");
const [loading, setLoading] = useState(false);

const sendMessage = async () => {

    if(!message) return;

    setLoading(true);

    try {

        const apiUrl = import.meta.env.VITE_CHAT_API_URL || "http://localhost:5000/chat";
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message })
        });

        const data = await res.json();

        setReply(data.choices[0].message.content);

    } catch(err){
        setReply("Something went wrong. Please try again.");
    }

    setLoading(false);
};

return (
<div style={{padding:"40px"}}>

    <h1>JimnatixGPT</h1>

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
