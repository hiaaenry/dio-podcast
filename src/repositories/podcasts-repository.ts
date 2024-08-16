import fs from "fs";
import path from "path";
import { Podcast } from "../models/podcasts-models";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<Podcast[]> => {
  const rawData = fs.readFileSync(pathData, "utf-8");

  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: Podcast) => podcast.podcastName === podcastName
    );
  }

  return jsonFile;
};
