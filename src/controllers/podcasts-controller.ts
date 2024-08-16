import { IncomingMessage, ServerResponse } from "http";

export const listEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify([
      {
        podcastName: "Tech Talks",
        episode: "The Future of AI",
        videoId: "abc123",
        categories: ["Technology", "AI", "Innovation"],
      },
      {
        podcastName: "Health Matters",
        episode: "Nutrition Myths",
        videoId: "def456",
        categories: ["Health", "Wellness", "Nutrition"],
      },
      {
        podcastName: "Startup Stories",
        episode: "Bootstrapping Your Business",
        videoId: "ghi789",
        categories: ["Business", "Entrepreneurship", "Startups"],
      },
      {
        podcastName: "History Unveiled",
        episode: "Ancient Civilizations",
        videoId: "jkl012",
        categories: ["History", "Education", "Culture"],
      },
      {
        podcastName: "Science Weekly",
        episode: "Quantum Mechanics Simplified",
        videoId: "mno345",
        categories: ["Science", "Physics", "Education"],
      },
    ])
  );
};
