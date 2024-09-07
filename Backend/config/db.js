const { PrismaClient } = require('@prisma/client');

// Initialize Prisma Client
const prisma = new PrismaClient();

// Export the prisma instance to be used in other parts of your application
module.exports = prisma;
