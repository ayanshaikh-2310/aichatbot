import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateResponse }) => {
  const inputRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userMessage = inputRef.current.value.trim();

    if (!userMessage) return;
    inputRef.current.value = "";

    // 1️⃣ Add user message to history
    const newUser = { role: "user", text: userMessage };
    setChatHistory((prev) => [...prev, newUser]);

    // 2️⃣ Add temporary "Thinking..." message
    const thinkingMsg = { role: "model", text: "Thinking..." };
    setChatHistory((prev) => [...prev, thinkingMsg]);

    // 3️⃣ Generate AI response
    const aiReply = await generateResponse(userMessage);

    // 4️⃣ Replace "Thinking..." with actual AI response
    setChatHistory((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = { role: "model", text: aiReply };
      return updated;
    });
  };

  return (
    <div>
      <form action="#" className="chat-form" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Message..."
          className="message-input"
          required
        />
        <button className="material-symbols-rounded">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </form>
    </div>
  );
};

export default ChatForm;
