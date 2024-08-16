export interface Podcast {
  podcastName: string;
  episode: string;
  videoId: string;
  categories: string[];
}

export interface ResponsePodcast {
  statusCode: number;
  body: Podcast[];
}
