import * as http from "http";
import {
  filterEpisodes,
  listEpisodes,
} from "./controllers/podcasts-controller";

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    const baseUrl = request.url?.split("?")[0];

    if (request.method === "GET" && baseUrl === "/api/list") {
      await listEpisodes(request, response);
    }

    if (request.method === "GET" && baseUrl === "/api/episode") {
      await filterEpisodes(request, response);
    }
  }
);

server.listen(process.env.PORT, () => {
  console.log("HTTP server running");
});
