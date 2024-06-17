module.exports = (req, res) => {
    if (req.method === 'POST') {
        const { message } = req.body;
        const botReply = `You said: ${message}`;

        // Use environment variables
        const apiKey = process.env.API_KEY;
        const webhookUrl = process.env.WEBHOOK_URL;
        const botId = process.env.BOT_ID;

        console.log(`API Key: ${apiKey}`);
        console.log(`Webhook URL: ${webhookUrl}`);
        console.log(`Bot ID: ${botId}`);

        res.status(200).json({ reply: botReply });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
