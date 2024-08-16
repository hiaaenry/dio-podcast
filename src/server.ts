import * as http from "http";
import { listEpisodes } from "./controllers/podcasts-controller";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    if (request.method === "GET") {
      await listEpisodes(request, response);
    }
  }
);

server.listen(process.env.PORT, () => {
  console.log("HTTP server running");
});
