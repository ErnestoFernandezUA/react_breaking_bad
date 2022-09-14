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
  [key: string]: {
    [key: string]: EpisodeType[];
  };
};

type CharacterType = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  nickname: string;
  appearance: number[],
  portrayed: string;
  category: string
  better_call_saul_appearance: [];
};
