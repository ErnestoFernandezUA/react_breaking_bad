import React, {
  useEffect, useState,
} from 'react';
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

  useEffect(() => {
    SetAllSeasons(Object.keys(series).sort());
  },
  []);

  return (
    <div className="Series">
      <h2>{nameOfSeries}</h2>
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
    </div>
  );
};
