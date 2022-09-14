import React, { useEffect, useState } from 'react';
import { getAllCharacters } from '../../api/character';
import {
  getAllEpisodes,
  // getAllEpisodesOffline,
} from '../../api/episode';
import { Loader } from '../Loader';
import { Series } from '../Series';
import './AllSeasons.scss';

export const AllSeasons: React.FC = () => {
  const [showLoaderSeasons, setShowLoaderSeasons] = useState(false);
  const [allEpisodes, setAllEpisodes] = useState<AllEpisodes | null>(null);
  const [defaultOrderSeries, setDefaultOrderSeries] = useState<string[] | null>(null);
  const [allCharacters, setAllCharacters] = useState<{[key: string]: CharacterType} | null>(null);

  const loadAndPrepareDataFromServer = async () => {
    setShowLoaderSeasons(true);

    try {
      // LOAD DATA
      const [
        allEpisodesFromServer,
        allCharactersFromServer,
      ] = await Promise.all([
        // if online
        getAllEpisodes(),
        getAllCharacters(),

        // if offline:
        // getAllEpisodesOffline(),
      ]);

      // PREPARE DATA
      // Prepare Episodes
      // #region changeMistake in episode{episode_id: 7, season: ' 1'}
      const errorDataIndex = allEpisodesFromServer
        .findIndex((e: EpisodeType) => e.season === ' 1');

      allEpisodesFromServer[errorDataIndex].season = '1';
      // #endregion ChangeMistake

      const preparedAllEpisodes: AllEpisodes = {};

      allEpisodesFromServer.forEach((episode: EpisodeType) => {
        if (!preparedAllEpisodes[episode.series]) {
          preparedAllEpisodes[episode.series] = {};
        }

        if (!preparedAllEpisodes[episode.series][episode.season]) {
          preparedAllEpisodes[episode.series][episode.season] = [episode];
        } else {
          preparedAllEpisodes[episode.series][episode.season].push(episode);
        }
      });

      setAllEpisodes(preparedAllEpisodes);

      // sort rule is modifiable
      const defaultOrderSeriesFromServer = Object.keys(preparedAllEpisodes)
        .sort((a, b) => -a.localeCompare(b));

      setDefaultOrderSeries(defaultOrderSeriesFromServer);

      // Prepare Characters
      const preparedAllCharacters: {[key: string]: CharacterType} | null = {};

      allCharactersFromServer.forEach((character: CharacterType) => {
        preparedAllCharacters[character.name] = character;
      });

      // eslint-disable-next-line no-console
      console.log('preparedAllCharacters = ', preparedAllCharacters);

      setAllCharacters(preparedAllCharacters);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    } finally {
      setShowLoaderSeasons(false);
    }
  };

  useEffect(() => {
    loadAndPrepareDataFromServer();
  },
  []);

  return (
    <>
      {showLoaderSeasons
        ? (
          <Loader />
        ) : (
          <div className="AllSeasons">
            <ul className="AllSeasonsList">
              {allEpisodes && defaultOrderSeries
              && defaultOrderSeries.map(nameOfSeries => (
                <li
                  className="AllSeasonsItem"
                  key={nameOfSeries}
                >
                  <Series
                    nameOfSeries={nameOfSeries}
                    series={allEpisodes[nameOfSeries]}
                    allCharacters={allCharacters}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
    </>
  );
};
