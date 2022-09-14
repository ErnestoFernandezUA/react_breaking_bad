import React, {
  useEffect, useState,
} from 'react';
import { Poster } from '../Poster';
import { Season } from '../Season';
import './Series.scss';

type Props = {
  nameOfSeries: string;
  series: {[key: string]: EpisodeType[]};
  allCharacters: {[key: string]: CharacterType} | null;
};

export const Series: React.FC<Props> = ({
  nameOfSeries,
  series,
  allCharacters,
}) => {
  const [AllSeasons, SetAllSeasons] = useState<string[] | null>(null);
  const [showSeries, setShoeSeries] = useState(false);
  // const [windowSize, setWindowSize] = useState();

  const showSeriesHandler = () => {
    setShoeSeries(!showSeries);
  };

  useEffect(() => {
    SetAllSeasons(Object.keys(series).sort());
  },
  []);

  // eslint-disable-next-line no-console
  console.log(window.innerWidth);

  return (
    <div
      className="Series"
    >
      <button
        type="button"
        onClick={() => showSeriesHandler()}
        className="Series__button"
      >
        <Poster
          nameOfSeries={nameOfSeries}
        />
      </button>

      {showSeries && (
        <>

          <ul className="Series__List">
            {AllSeasons
            && AllSeasons.map((seasonId: string) => (
              <li
                key={seasonId}
                className="Series__Item"
              >
                <Season
                  seasonId={seasonId}
                  season={series[seasonId]}
                  allCharacters={allCharacters}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
