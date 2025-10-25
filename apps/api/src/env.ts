import { z } from "zod";
import * as dotenv from "dotenv";
dotenv.config({ path: `${process.cwd()}/../../.env` });

const Env = z.object({
  PORT: z.coerce.number().default(8787),
  DATABASE_URL: z.string().url().default("postgresql://user:pass@localhost:5432/db"),
  REDIS_URL: z.string().default("redis://localhost:6379"),
  BASE_RPC_URL: z.string().url().default("https://sepolia.base.org"),
  BASE_CHAIN_ID: z.coerce.number().default(84532),
  ESCROW_ADDRESS: z.string().default("0x0000000000000000000000000000000000000000"),
  XPREGISTRY_ADDRESS: z.string().default("0x0000000000000000000000000000000000000000"),
  BADGE_ADDRESS: z.string().default("0x0000000000000000000000000000000000000000"),
  ARK_ADDRESS: z.string().default("0x0000000000000000000000000000000000000000"),
  SERVER_PRIVATE_KEY: z.string().default("0x0000000000000000000000000000000000000000000000000000000000000001")
});

export const env = Env.parse(process.env);
