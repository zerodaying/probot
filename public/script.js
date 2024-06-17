document.getElementById('sendMessageButton').addEventListener('click', sendMessage);
document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('restartChatButton').addEventListener('click', restartChat);

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;

    if (message.trim()) {
        displayMessage('You', message);
        messageInput.value = '';

        fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),
        })
        .then(response => response.json())
        .then(data => {
            displayMessage('Bot', data.reply);
        })
        .catch(error => console.error('Error:', error));
    }
}

function displayMessage(sender, message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.className = 'chat-message';
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function restartChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = '';

    fetch('/api/restart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Chat reset successfully');
    })
    .catch(error => console.error('Error:', error));
}
