import { useEffect, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";

const ChatMessage = ({ chat }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (chat.role !== "model") {
      // User ke messages normal show honge
      setDisplayText(chat.text);
      return;
    }

    // Typewriter effect only for model messages
    let index = 0;
    setDisplayText("");

    const interval = setInterval(() => {
      setDisplayText(chat.text.slice(0, index));
      index++;

      if (index > chat.text.length) {
        clearInterval(interval);
      }
    }, 10); // typing speed (20ms per character)

    return () => clearInterval(interval);
  }, [chat.text, chat.role]);

  return (
    <div
      className={`message ${chat.role === "model" ? "bot" : "user"}-message`}
    >
      {chat.role === "model" && <ChatbotIcon />}
      <p className="message-text">{displayText}</p>
    </div>
  );
};

export default ChatMessage;
