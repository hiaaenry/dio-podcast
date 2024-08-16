import * as http from "http";
import { app } from "./app";

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log("HTTP server running");
});
