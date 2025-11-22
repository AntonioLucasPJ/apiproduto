import "dotenv/config";
import { PrismaClient } from '../src/generated/client/'

const prisma = new PrismaClient()

export { prisma }
