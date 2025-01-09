import { app } from "./app";
import { env } from "./env";

app
  .listen({
    port: env.PORT || 3000,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log("HTTP Sever Running!");
  });
