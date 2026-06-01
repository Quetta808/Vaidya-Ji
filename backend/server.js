const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

dotenv.config();
const app = express();

app.use(helmet()); 
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json({ limit: '10kb' }));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests, please try again later.'
});
app.use('/api/', limiter);

app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'success', message: 'VAIDYA JI backend is running safely!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server operating on port ${PORT}`));
