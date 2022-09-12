/// <reference types="react-scripts" />

type EpisodeType = {
  episode_id: number;
  title: string;
  season: string;
  air_date: string;
  characters: string[];
  episode: string;
  series: string;
};

type AllEpisodes = {
  [key: string]: EpisodeType[];
};
