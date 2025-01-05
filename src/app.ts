import cookie from "@fastify/cookie";
import fastify from "fastify";
import { transactionRoutes } from "./routes/transaction";

export const app = fastify();

app.register(cookie);

app.register(transactionRoutes, {
  prefix: "transactions",
});
