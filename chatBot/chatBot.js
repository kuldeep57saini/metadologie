class ChatBot extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <style>
            .chat-bot {
                position: fixed;
                bottom: 20px;
                right: 22px;
                padding: 10px;
                border-radius: 5px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            }
            
            .chat-bot-icon {
                width: 50px;
                height: 50px;
                background-color: #007bff;
                border-radius: 50%;
                color: #fff;
                text-align: center;
                line-height: 50px;
            }
        </style>

        <div class='chat-bot'>
            <div>
                <div class='chat-bot-icon'>Bot</div>
            </div>
        </div>
        `;
    }
}

customElements.define('chat-bot', ChatBot);
