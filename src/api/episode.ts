import { request } from './request';
import episodes from '../data/json/episodes.json';
import episodesBreakingBad from '../data/json/episodesBreakingBad.json';
import episodesBetterCallSaul from '../data/json/episodesBetterCallSaul.json';

export const getEpisode = (episodeId: string) => request(`/episodes/${episodeId}`);

export const getAllEpisodes = (series = '') => {
  switch (series) {
    case 'Breaking Bad':
      return request(
        '/episodes?series=Breaking+Bad',
      );

    case 'Better Call Saul':
      return request(
        '/episodes?series=Breaking+Bad',
      );

    default:
      return request('/episodes/');
  }
};

export const getAllEpisodesBreakingBad = () => request(
  '/episodes?series=Breaking+Bad',
);

export const getAllEpisodesBetterCallSaul = () => request(
  '/episodes?series=Better+Call+Saul',
);

// offline:
export const getAllEpisodesBreakingBadOffline = () => episodesBreakingBad;

export const getAllEpisodesBetterCallSaulOffline = () => episodesBetterCallSaul;

export const getAllEpisodesOffline = (series = '') => {
  switch (series) {
    case 'Breaking Bad':
      return episodesBreakingBad;

    case 'Better Call Saul':
      return episodesBetterCallSaul;

    default:
      return episodes;
  }
};
