const express = require('express');
const router = express.Router();
const prisma = require('../config/db'); // Import your Prisma client instance
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Route to submit a document (students upload documents)
router.post('/submit', authMiddleware, async (req, res) => {
  const { studentId, documentName, documentData } = req.body;

  try {
    const document = await prisma.document.create({
      data: {
        studentId,
        documentName,
        documentData,
        status: 'submitted',
      },
    });
    res.json({ message: 'Document submitted', document });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to verify a document (SAG Bureau verifies the uploaded documents)
router.post('/verify/:id', authMiddleware, roleMiddleware('SAG_BUREAU'), async (req, res) => {
  const { id } = req.params;

  try {
    const document = await prisma.document.update({
      where: { id: parseInt(id, 10) },
      data: { status: 'verified' },
    });
    res.json({ message: 'Document verified', document });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to forward a verified document to the Finance Bureau
router.put('/forward/:id', authMiddleware, roleMiddleware('SAG_BUREAU'), async (req, res) => {
  const { id } = req.params;

  try {
    const document = await prisma.document.update({
      where: { id: parseInt(id, 10) },
      data: { status: 'forwarded_to_finance' },
    });
    res.json({ message: 'Document forwarded to Finance Bureau', document });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
