const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const documentRoutes = require('./routes/documentRoutes');
const prisma = require('./config/prisma');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
