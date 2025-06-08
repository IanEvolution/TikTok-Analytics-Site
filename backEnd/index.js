// Simple Express backend for TikTok OAuth testing
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../frontEnd')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontEnd/Index.html'));
});

// Placeholder for TikTok OAuth callback route
app.get('/auth/tiktok/callback', (req, res) => {
  res.send('Received TikTok OAuth callback!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
