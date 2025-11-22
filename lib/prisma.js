import "dotenv/config";
import { PrismaClient } from '../src/generated/teste/'

const prisma = new PrismaClient()

export { prisma }
