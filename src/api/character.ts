import { request } from './request';

export const getAllCharacters = () => request('/characters');
