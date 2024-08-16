import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episode-service";

export const listEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceListEpisodes();

  response.writeHead(200, { "Content-Type": "application/json" });

  response.end(JSON.stringify(content));
};

export const filterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceFilterEpisodes("Tech Talks");

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(content));
};
