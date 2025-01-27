const express = require('express');
const router = express.Router();
const scanController = require('../controllers/scanController');

// Main dashboard route
router.get('/', scanController.renderDashboard);

// Chat management routes
router.post('/chats', scanController.createChat);
router.get('/chats/:id', scanController.getChat);
router.patch('/chats/:id', scanController.updateChat);
router.delete('/chats/:id', scanController.deleteChat);

// Scanning operations
router.post('/scan', scanController.scanUrls);

// Error handling for undefined routes
router.use((req, res) => {
    res.status(404).render('error', { 
        error: 'Page not found',
        message: 'The requested resource could not be located'
    });
});

module.exports = router;