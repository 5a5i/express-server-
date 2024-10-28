const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
const PORT = process.env.PORT || 3000;

// Allow CORS for your GitHub Pages domain
app.use(cors({
  origin: 'https://5a5i.github.io'
}));

app.get('/proxy/track', async (req, res) => {
  try {
    const response = await fetch('https://theaudiodb.com/api/v1/json/2/track.php?m=2115888');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
