import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
) => {
  const queryString = podcastName?.split("?p=")[1] || "";

  const decodedQueryString = decodeURIComponent(queryString);

  const data = await repositoryPodcast(decodedQueryString);

  return data;
};
