import React, {
  useEffect,
  useState,
} from 'react';
// import { getAllEpisodesBetterCallSaul, getAllEpisodesBreakingBad } from '../../api/episode';
import { Loader } from '../Loader';
import './Season.scss';

// type EpisodeType = {
//   episode_id: number;
//   title: string;
//   season: string;
//   air_date: string;
//   characters: string[];
//   episode: string;
//   series: string;
// };

// const initialEpisodes = [
//   {
//     episode_id: 1,
//     title: '',
//     season: '',
//     air_date: '',
//     characters: [''],
//     episode: '',
//     series: '',
//   },
// ];

// const initialSeasons = [''];

export const Seasons: React.FC = () => {
  const [showLoaderSeason, setShowLoaderSeason] = useState(false);
  // const [allEpisodesBreakingBad, setAllEpisodesBreakingBad] = useState(initialEpisodes);
  // const [allEpisodesBetterCallSaul, setAllEpisodesBetterCallSaul] = useState(initialEpisodes);
  // const [allSeasonsBreakingBad, setAllSeasonsBreakingBad] = useState(initialSeasons);
  // const [allSeasonsBetterCallSaul, setAllSeasonsBetterCallSaul] = useState(initialSeasons);

  const loadDataFromServer = async () => {
    setShowLoaderSeason(true);

    try {
      // const [
      //   allEpisodesBreakingBadFromServer,
      //   allEpisodesBetterCallSaulFromServer,
      // ] = await Promise.all([
      //   getAllEpisodesBreakingBad(),
      //   getAllEpisodesBetterCallSaul(),
      // ]);

      // eslint-disable-next-line no-console
      // console.log(allEpisodesBreakingBadFromServer, allEpisodesBetterCallSaulFromServer);

      // #region changeMistake in episode{episode_id: 7, season: ' 1'}
      // const errorDataIndex = allEpisodesBreakingBadFromServer
      //   .findIndex((e: EpisodeType) => e.episode_id === 7);

      // allEpisodesBreakingBadFromServer[errorDataIndex].season = '1';
      // // #endregion ChangeMistake

      // setAllEpisodesBreakingBad(allEpisodesBreakingBadFromServer);
      // setAllEpisodesBetterCallSaul(allEpisodesBetterCallSaulFromServer);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    } finally {
      setShowLoaderSeason(false);
    }
  };

  // const prepareData = () => {
  //   const allSeasonsBreakingBadFromServer = allEpisodesBreakingBad
  //     .map((e: Episode) => e.season)
  //     .filter(
  //       (x: string, i: number, a: string[]) => a.indexOf(x) === i,
  //     );

  //   const allSeasonsBetterCallSaulFromServer = allEpisodesBetterCallSaul
  //     .map((e: Episode) => e.season)
  //     .filter(
  //       (x: string, i: number, a: string[]) => a.indexOf(x) === i,
  //     );

  //   // eslint-disable-next-line no-console
  //   console.log('allEpisodesBreakingBad', allSeasonsBreakingBadFromServer);

  //   // eslint-disable-next-line no-console
  //   console.log('allSeasonsBetterCallSaul', allSeasonsBetterCallSaulFromServer);

  //   setAllSeasonsBreakingBad(allSeasonsBreakingBadFromServer);
  //   setAllSeasonsBetterCallSaul(allSeasonsBetterCallSaulFromServer);
  // };

  useEffect(() => {
    loadDataFromServer();
    // prepareData();
  },
  []);

  return (
    <>
      {showLoaderSeason
        ? (
          <Loader />
        ) : (
          <div className="Seasons">
            <h2>Breaking Bad</h2>
            {/* <ul className="SeasonsList">
              {allSeasonsBreakingBad.map(season => (
                <li
                  key={season}
                  className="SeasonsItem"
                >
                  {`Season: ${season}`}
                  <ul>
                    {allEpisodesBreakingBad.map(episode => (
                      <li key={episode.episode_id}>
                        {`${episode.season} : ${episode.title}`}
                      </li>
                    ))}
                  </ul>
                  <Season
                    seasonId={season}
                  />
                </li>
              ))}
            </ul> */}

            <h2>Better Call Saul</h2>
            {/* <ul className="SeasonsList">
              {allSeasonsBetterCallSaul.map(season => (
                <li
                  key={season}
                  className="SeasonsItem"
                >
                  {`Season: ${season}`}
                  <ul>
                    {allEpisodesBetterCallSaul.map(episode => (
                      <li key={episode.episode_id}>{episode.title}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul> */}
          </div>
        )}
    </>
  );
};
