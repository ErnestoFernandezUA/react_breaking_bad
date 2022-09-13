import React, {
  useEffect,
} from 'react';
import { Episode } from '../Episode';
import './Season.scss';

type Props = {
  seasonId: string;
  season: EpisodeType[];
};

export const Season: React.FC<Props> = ({ season, seasonId }) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Season ${seasonId} mounted`);
  },
  []);

  return (
    <div className="Season">
      <h3>{`Season ${seasonId}`}</h3>
      <ul className="SeasonList">
        {season.map((episode: EpisodeType) => (
          <li
            key={episode.episode_id}
            className="SeasonItem"
          >
            <Episode episode={episode} />
          </li>
        ))}
      </ul>
    </div>
  );
};
