import React, {
  useEffect,
  useState,
} from 'react';
import { Episode } from '../Episode';
import './Season.scss';

type Props = {
  seasonId: string;
  season: EpisodeType[];
  allCharacters: {[key: string]: CharacterType} | null;
};

export const Season: React.FC<Props> = ({ season, seasonId, allCharacters }) => {
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
        <ul className="Season__List">
          {season.map((episode: EpisodeType) => (
            <li
              key={episode.episode_id}
              className="Season__Item"
            >
              <Episode
                episode={episode}
                allCharacters={allCharacters}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
