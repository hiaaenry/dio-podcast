import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episode-service";
import { StatusCode } from "../utils/status-code";
import { ContentType } from "../utils/content-types";

export const listEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceListEpisodes();

  response.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON });

  response.end(JSON.stringify(content));
};

export const filterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await serviceFilterEpisodes(request.url);

  response.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON });

  response.end(JSON.stringify(content));
};
