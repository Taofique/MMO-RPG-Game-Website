import type { Game } from "../types/TGame";
import type { GameDetail } from "../types/TGame";

export const fetchGames = async (): Promise<Game[]> => {
  try {
    const proxyUrl =
      "https://corsproxy.io/?" +
      encodeURIComponent("https://www.mmobomb.com/api1/games");
    const response = await fetch(proxyUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch games");
    }

    const data = response.json();
    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
};

export const fetchGameById = async (id: number): Promise<GameDetail | null> => {
  try {
    const proxyUrl2 =
      "https://corsproxy.io/?" +
      encodeURIComponent(`https://www.mmobomb.com/api1/game?id=${id}`);
    const response2 = await fetch(proxyUrl2);

    if (!response2.ok) {
      throw new Error("Failed to fetch game");
    }

    const data2 = response2.json();
    return data2;
  } catch (error) {
    console.error("Error fetching games:", error);
    return null;
  }
};
