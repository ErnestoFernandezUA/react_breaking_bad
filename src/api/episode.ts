import { request } from './request';
import episodesBreakingBad from '../data/episodesBreakingBad.json';
import episodesBetterCallSaul from '../data/episodesBetterCallSaul.json';

export const getEpisode = (episodeId: string) => request(`/episodes/${episodeId}`);

export const getAllEpisodes = () => request('/episodes/');

export const getAllEpisodesBreakingBad = () => request(
  '/episodes?series=Breaking+Bad',
);

export const getAllEpisodesBetterCallSaul = () => request(
  '/episodes?series=Better+Call+Saul',
);

// offline:
export const getAllEpisodesOffline = () => JSON.parse('./../data/episodes.json');

export const getAllEpisodesBreakingBadOffline = () => episodesBreakingBad;

export const getAllEpisodesBetterCallSaulOffline = () => episodesBetterCallSaul;
