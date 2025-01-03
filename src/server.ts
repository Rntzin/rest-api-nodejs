import fastify from "fastify";
import { env } from "./env";
import { transactionRoutes } from "./routes/transaction";

const app = fastify();

app.register(transactionRoutes);

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Sever Running!");
  });
