// Simple Express backend for TikTok OAuth testing
const express = require('express');
const axios = require('axios');
const querystring = require('querystring');
const app = express();
const PORT = process.env.PORT || 3000;

// Root route for backend health check
app.get('/', (req, res) => {
  res.send('TikTok Analytics Backend is running!');
});

// TikTok OAuth login route
app.get('/auth/tiktok/login', (req, res) => {
  const clientKey = process.env.CLIENT_KEY;
  const redirectUri = process.env.TIKTOK_REDIRECT_URI;
  const scope = 'user.info.basic'; // adjust scopes as needed
  const state = Math.random().toString(36).substring(2, 15); // random state for CSRF protection

  const authUrl = `https://www.tiktok.com/v2/auth/authorize/?client_key=${clientKey}&response_type=code&scope=${scope}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
  res.redirect(authUrl);
});

// TikTok OAuth callback route
app.get('/auth/tiktok/callback', async (req, res) => {
  const code = req.query.code;
  const state = req.query.state;
  if (!code) {
    return res.status(400).send('No code provided');
  }

  // Log the parameters being sent to TikTok for debugging
  const params = {
    client_key: process.env.CLIENT_KEY,
    client_secret: process.env.CLIENT_SECRET,
    code: code,
    grant_type: 'authorization_code',
    redirect_uri: process.env.TIKTOK_REDIRECT_URI
  };
  console.log('Sending to TikTok:', params);

  // Log the actual values for debugging
  console.log('client_key:', process.env.CLIENT_KEY);
  console.log('client_secret:', process.env.CLIENT_SECRET);
  console.log('code:', code);
  console.log('redirect_uri:', process.env.TIKTOK_REDIRECT_URI);
  console.log('params:', params);

  try {
    const tokenRes = await axios.post('https://open.tiktokapis.com/v2/oauth/token/', querystring.stringify(params), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });

    // Show the access token and user info (for demo)
    res.json(tokenRes.data);
  } catch (err) {
    // Log the error response for debugging
    console.error('TikTok token error:', err.response?.data || err.message);
    res.status(500).send('Error exchanging code for access token: ' + (err.response?.data ? JSON.stringify(err.response.data) : err.message));
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
