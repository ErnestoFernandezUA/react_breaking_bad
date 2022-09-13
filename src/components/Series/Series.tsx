import React, {
  useEffect, useState,
} from 'react';
import { Poster } from '../Poster';
import { Season } from '../Season';
import './Series.scss';

type Props = {
  nameOfSeries: string;
  series: {[key: string]: EpisodeType[]};
};

export const Series: React.FC<Props> = ({
  nameOfSeries,
  series,
}) => {
  const [AllSeasons, SetAllSeasons] = useState<string[] | null>(null);
  const [showSeries, setShoeSeries] = useState(false);

  const showSeriesHandler = () => {
    setShoeSeries(!showSeries);
  };

  useEffect(() => {
    SetAllSeasons(Object.keys(series).sort());
  },
  []);

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

          <ul className="SeriesList">
            {AllSeasons
            && AllSeasons.map((seasonId: string) => (
              <li
                key={seasonId}
                className="SeriesItem"
              >
                <Season
                  seasonId={seasonId}
                  season={series[seasonId]}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
