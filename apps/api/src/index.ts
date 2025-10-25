import { buildApp } from "./app.js";
import { env } from "./env.js";

// For Vercel serverless
export default async () => {
  return await buildApp();
};

// For local development
if (!process.env.VERCEL) {
  const app = await buildApp();
  const port = env.PORT;
  app.listen({ port, host: "0.0.0.0" }).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
