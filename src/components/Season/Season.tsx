import React, {
  useEffect,
  useState,
} from 'react';
import { Episode } from '../Episode';
import './Season.scss';

type Props = {
  seasonId: string;
  season: EpisodeType[];
};

export const Season: React.FC<Props> = ({ season, seasonId }) => {
  const [showSeason, setShowSeason] = useState(false);

  const showSeasonHandler = () => {
    setShowSeason(!showSeason);
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`Season ${seasonId} mounted`);
  },
  []);

  return (
    <div className="Season">
      <button
        type="button"
        onClick={() => showSeasonHandler()}
        className="Season__button"
      >
        <p>{`Season ${seasonId}`}</p>
      </button>

      {showSeason && (
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
      )}
    </div>
  );
};
