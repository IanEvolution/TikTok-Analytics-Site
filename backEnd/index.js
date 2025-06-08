// Simple Express backend for TikTok OAuth testing
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route for backend health check
app.get('/', (req, res) => {
  res.send('TikTok Analytics Backend is running!');
});

// Placeholder for TikTok OAuth callback route
app.get('/auth/tiktok/callback', (req, res) => {
  res.send('Received TikTok OAuth callback!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
