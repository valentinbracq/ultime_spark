import { buildApp } from "./app.js";
import { env } from "./env.js";
import type { IncomingMessage, ServerResponse } from "http";

let app: Awaited<ReturnType<typeof buildApp>> | null = null;

// For Vercel serverless - create handler
export default async function handler(req: IncomingMessage, res: ServerResponse) {
  if (!app) {
    app = await buildApp();
    await app.ready();
  }
  
  // Use Fastify's routing by passing the raw Node.js req/res
  // @ts-ignore - Fastify's routing method
  app.routing(req, res);
}

// For local development
if (!process.env.VERCEL) {
  const localApp = await buildApp();
  const port = env.PORT;
  localApp.listen({ port, host: "0.0.0.0" }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
