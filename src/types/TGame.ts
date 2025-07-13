export type Game = {
  id: number;
  title: string;
  thumbnail: string;
  genre: string;
};

export type Favorite = {
  id: number;
  title: string;
  addedAt: string; // time Stamp
};

export type GameDetail = {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  developer: string;
  publisher: string;
  release_date: string;
};
