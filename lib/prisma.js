import "dotenv/config";
import { PrismaClient } from '../src/generated/client/client.ts'

const prisma = new PrismaClient()

export { prisma }