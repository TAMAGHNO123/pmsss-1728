const prisma = require('../db');

// Submit a document
const submitDocument = async (req, res) => {
  const { title, content, userId } = req.body;

  try {
    const newDocument = await prisma.document.create({
      data: {
        title,
        content,
        userId,
        status: 'Submitted',
      },
    });

    res.status(201).json({ message: 'Document submitted successfully', newDocument });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit document' });
  }
};

// Verify a document (SAG Bureau)
const verifyDocument = async (req, res) => {
  const { documentId } = req.params;

  try {
    const updatedDocument = await prisma.document.update({
      where: { id: parseInt(documentId) },
      data: { status: 'Verified' },
    });

    res.status(200).json({ message: 'Document verified', updatedDocument });
  } catch (error) {
    res.status(500).json({ error: 'Failed to verify document' });
  }
};

// Forward document to Finance Bureau
const forwardToFinance = async (req, res) => {
  const { documentId } = req.params;

  try {
    const updatedDocument = await prisma.document.update({
      where: { id: parseInt(documentId) },
      data: { status: 'Forwarded to Finance' },
    });

    res.status(200).json({ message: 'Document forwarded to Finance Bureau', updatedDocument });
  } catch (error) {
    res.status(500).json({ error: 'Failed to forward document' });
  }
};

module.exports = {
  submitDocument,
  verifyDocument,
  forwardToFinance,
};
