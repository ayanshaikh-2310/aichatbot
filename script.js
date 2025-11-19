const chatBody = document.querySelector(".chat-body");
const form = document.querySelector(".chat-form");
const input = document.querySelector(".message-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const message = input.value.trim();
    if (!message) return;

    addUserMessage(message);
    input.value = "";

    setTimeout(() => {
        addBotMessage("Thinking...");
    }, 500);
});

function addUserMessage(msg) {
    const div = document.createElement("div");
    div.className = "message user-message";
    div.innerHTML = `<p class="message-text">${msg}</p>`;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function addBotMessage(msg) {
    const div = document.createElement("div");
    div.className = "message bot-message";
    div.innerHTML = `<p class="message-text">${msg}</p>`;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
}
