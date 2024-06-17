module.exports = (req, res) => {
    if (req.method === 'POST') {
        // Handle chat restart logic here if needed
        res.status(200).json({ message: 'Chat reset successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
