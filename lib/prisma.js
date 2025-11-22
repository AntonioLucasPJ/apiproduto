import "dotenv/config";
import { PrismaClient } from '../src/generated/prisma/'

const prisma = new PrismaClient()

export { prisma }
