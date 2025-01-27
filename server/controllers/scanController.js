const Scan = require('../models/Scan');
const Chat = require('../models/Chat');
const axios = require('axios');


const requiredHeaders = [
    'Content-Security-Policy',
    'X-Content-Type-Options',
    'X-Frame-Options',
    'Strict-Transport-Security',
    'X-XSS-Protection',
    'Referrer-Policy',
    'Permissions-Policy'
];

// Controller functions
const renderDashboard = async (req, res) => {
    try {
        const chats = await Chat.find().populate('scans').sort({ createdAt: -1 });
        res.render('index', {
            chats,
            activeChat: chats[0],
            requiredHeaders,
            errorData: req.query
        });
    } catch (error) {
        res.status(500).send('Error loading chats');
    }
};

const createChat = async (req, res) => {
    try {
        const chat = new Chat();
        await chat.save();
        res.redirect(`/chats/${chat._id}`);
    } catch (error) {
        res.redirect('/?error=' + encodeURIComponent(error.message));
    }
};

const getChat = async (req, res) => {
    try {
        const chats = await Chat.find().sort({ createdAt: -1 });
        const activeChat = await Chat.findById(req.params.id).populate('scans');
        
        res.render('index', {
            chats,
            activeChat,
            requiredHeaders,
            errorData: req.query
        });
    } catch (error) {
        res.redirect('/?error=' + encodeURIComponent(error.message));
    }
};

const updateChat = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        await Chat.findByIdAndUpdate(id, { name });
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteChat = async (req, res) => {
    try {
        const { id } = req.params;
        // Delete chat and its associated scans
        await Chat.findByIdAndDelete(id);
        await Scan.deleteMany({ chat: id });
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const scanUrls = async (req, res) => {
    let chatId;
    try {
        chatId = req.body.chatId;
        const { url, subdomainScan, nucleiScan } = req.body;

        if (!chatId) throw new Error('Chat session not found');
        if (!url) throw new Error('Please enter a valid URL');

        let validatedUrl;
        try {
            validatedUrl = new URL(url);
        } catch {
            throw new Error('Invalid URL format');
        }

        const scanData = {
            chat: chatId,
            url: validatedUrl.href,
            subdomainScan: !!subdomainScan,
            nucleiScan: !!nucleiScan,
            status: 'pending'
        };

        const scan = new Scan(scanData);
        await scan.save();

        await Chat.findByIdAndUpdate(chatId, { $push: { scans: scan._id } });

        // Start of modified header processing
        const response = await axios.get(validatedUrl.href);
        
        // Process headers to handle multi-value cookies
        const headers = new Map();
        for (const [rawKey, value] of Object.entries(response.headers)) {
            const key = rawKey.toLowerCase();

            // Special handling for set-cookie headers
            if (key === 'set-cookie') {
                headers.set(key, Array.isArray(value) ? value : [value]);
            } else {
                headers.set(key, value);
            }
        }

        scan.headers = headers;
        scan.missingHeaders = requiredHeaders.filter(h => 
            !headers.has(h.toLowerCase())
        );
        scan.status = 'completed';
        await scan.save();
        // End of modified header processing

        res.redirect(`/chats/${chatId}`);

    } catch (error) {
        const params = new URLSearchParams({
            ...req.body,
            error: error.message
        });
        res.redirect(chatId ? `/chats/${chatId}?${params}` : `/?${params}`);
    }
};

module.exports = {
    renderDashboard,
    createChat,
    getChat,
    updateChat,
    scanUrls,
    deleteChat
};