import React, {
  useEffect,
  useState,
} from 'react';
import {
  // getAllEpisodesBetterCallSaul,
  // getAllEpisodesBreakingBad,
  getAllEpisodesBetterCallSaulOffline,
  getAllEpisodesBreakingBadOffline,
} from '../../api/episode';
import { Episode } from '../episode';
import { Loader } from '../Loader';
import './AllSeasons.scss';

export const Seasons: React.FC = () => {
  const [showLoaderSeasons, setShowLoaderSeasons] = useState(false);
  const [allEpisodesBreakingBad, setAllEpisodesBreakingBad]
  = useState<AllEpisodes | null>(null);
  const [allEpisodesBetterCallSaul, setAllEpisodesBetterCallSaul]
  = useState<AllEpisodes | null>(null);
  const [allSeasonsBreakingBad, setAllSeasonsBreakingBad] = useState<string[] | null>(null);
  const [allSeasonsBetterCallSaul, setAllSeasonsBetterCallSaul] = useState<string[] | null>(null);

  const loadAndPrepareDataFromServer = async () => {
    // eslint-disable-next-line no-console
    console.log('loadAndPrepareDataFromServer....................');

    setShowLoaderSeasons(true);

    try {
      // LOAD DATA
      const [
        allEpisodesBreakingBadFromServer,
        allEpisodesBetterCallSaulFromServer,
      ] = await Promise.all([
        // getAllEpisodesBreakingBad(),
        // getAllEpisodesBetterCallSaul(),

        // if offline:
        getAllEpisodesBreakingBadOffline(),
        getAllEpisodesBetterCallSaulOffline(),
      ]);

      // eslint-disable-next-line no-console
      // console.log(allEpisodesBreakingBadFromServer);

      // PREPARE DATA
      // #region changeMistake in episode{episode_id: 7, season: ' 1'}
      const errorDataIndex = allEpisodesBreakingBadFromServer
        .findIndex((e: EpisodeType) => e.episode_id === 7);

      allEpisodesBreakingBadFromServer[errorDataIndex].season = '1';
      // #endregion ChangeMistake

      const preparedEpisodesBreakingBad: { [key: string]: EpisodeType[] } = {};

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < allEpisodesBreakingBadFromServer.length; i++) {
        // eslint-disable-next-line no-console
        console.log(i, `season BreakingBad ${allEpisodesBreakingBadFromServer[i].season}`, preparedEpisodesBreakingBad);

        if (!preparedEpisodesBreakingBad[allEpisodesBreakingBadFromServer[i].season]) {
          preparedEpisodesBreakingBad[allEpisodesBreakingBadFromServer[i].season]
          = [allEpisodesBreakingBadFromServer[i]];
        } else {
          preparedEpisodesBreakingBad[allEpisodesBreakingBadFromServer[i].season]
            .push(allEpisodesBreakingBadFromServer[i]);
        }
      }

      const preparedEpisodesBetterCallSaul: { [key: string]: EpisodeType[] } = {};

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < allEpisodesBetterCallSaulFromServer.length; i++) {
        // eslint-disable-next-line no-console
        console.log(i, `season BetterCallSaul ${allEpisodesBetterCallSaulFromServer[i].season}`, preparedEpisodesBetterCallSaul);

        if (!preparedEpisodesBetterCallSaul[allEpisodesBetterCallSaulFromServer[i].season]) {
          preparedEpisodesBetterCallSaul[allEpisodesBetterCallSaulFromServer[i].season]
          = [allEpisodesBetterCallSaulFromServer[i]];
        } else {
          preparedEpisodesBetterCallSaul[allEpisodesBetterCallSaulFromServer[i].season]
            .push(allEpisodesBetterCallSaulFromServer[i]);
        }
      }

      setAllEpisodesBreakingBad(preparedEpisodesBreakingBad);
      setAllEpisodesBetterCallSaul(preparedEpisodesBetterCallSaul);

      const allSeasonsBreakingBadFromServer = Object.keys(preparedEpisodesBreakingBad).sort();
      const allSeasonsBetterCallSaulFromServer
      = Object.keys(preparedEpisodesBetterCallSaul).sort();

      setAllSeasonsBreakingBad(allSeasonsBreakingBadFromServer);
      setAllSeasonsBetterCallSaul(allSeasonsBetterCallSaulFromServer);

      // eslint-disable-next-line no-console
      console.log('allEpisodesBreakingBad', allEpisodesBreakingBad);
      // eslint-disable-next-line no-console
      console.log('allEpisodesBetterCallSaul = ', allEpisodesBetterCallSaul);
      // eslint-disable-next-line no-console
      console.log('allSeasonsBreakingBad = ', allSeasonsBreakingBad);
      // eslint-disable-next-line no-console
      console.log('allSeasonsBetterCallSaul = ', allSeasonsBetterCallSaul);
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
            <h2>Breaking Bad</h2>
            <ul className="AllSeasonsList">
              {allSeasonsBreakingBad
              && allSeasonsBreakingBad.map(season => (
                <li
                  key={season}
                  className="AllSeasonsItem"
                >
                  <h3>{`Season: ${season}`}</h3>

                  {allEpisodesBreakingBad
                    && (
                      <ul className="SeasonsList">
                        {allEpisodesBreakingBad[season].map((episode: EpisodeType) => (
                          <li
                            key={episode.episode_id}
                            className="SeasonsItem"
                          >
                            <Episode
                              episode={episode}
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>

            <h2>Better Call Saul</h2>
            <ul className="AllSeasonsList">
              {allSeasonsBetterCallSaul
              && allSeasonsBetterCallSaul.map(season => (
                <li
                  key={season}
                  className="AllSeasonsItem"
                >
                  <h3>{`Season: ${season}`}</h3>
                  {allEpisodesBetterCallSaul
                    && (
                      <ul className="SeasonsList">
                        {allEpisodesBetterCallSaul[season].map((episode: EpisodeType) => (
                          <li
                            className="SeasonsItem"
                            key={episode.episode_id}
                          >
                            <Episode
                              episode={episode}
                            />
                          </li>
                        ))}
                      </ul>
                    )}
                </li>
              ))}
            </ul>
          </div>
        )}
    </>
  );
};
