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
  const queryString = request.url?.split("?p=")[1] || "";

  const decodedQueryString = decodeURIComponent(queryString);

  const content = await serviceFilterEpisodes(decodedQueryString);

  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(content));
};
