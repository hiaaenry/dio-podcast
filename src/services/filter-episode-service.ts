import { ResponsePodcast } from "../models/podcasts-models";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
) => {
  let responseFormat: ResponsePodcast = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName?.split("?p=")[1] || "";

  const decodedQueryString = decodeURIComponent(queryString);

  const data = await repositoryPodcast(decodedQueryString);

  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;

  responseFormat.body = data;

  return responseFormat;
};
