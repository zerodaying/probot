module.exports = (req, res) => {
    if (req.method === 'POST') {
        const { message } = req.body;
        const botReply = `You said: ${message}`;

        // Emit the reply to all clients using a WebSocket (if implemented)
        // Example:
        // io.emit('receiveMessage', { sender: 'Bot', message: botReply });

        res.status(200).json({ reply: botReply });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
