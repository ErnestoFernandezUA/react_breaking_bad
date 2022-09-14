import React, { useEffect } from 'react';
import { CharacterSmall } from '../CharacterSmall';
import './Episode.scss';

type Props = {
  episode: EpisodeType;
  allCharacters: {[key: string]: CharacterType} | null;
};

export const Episode: React.FC<Props> = ({
  episode,
  allCharacters,
}) => {
  const {
    episode_id,
    title,
    season,
    air_date,
    characters,
    episode: episode_id_season,
  } = episode;

  useEffect(() => {
  },
  []);

  return (
    <div className="Episode">
      <div className="Episode__episode_id">{episode_id}</div>
      <div className="Episode__season">{`Season: ${season}/${episode_id_season}`}</div>
      <div className="Episode__title">{title}</div>
      <div className="Episode__air_date">{air_date}</div>
      <ul className="Episode__characters">
        {characters.map(character => (
          <li key={character}>
            {/* {character} */}
            <CharacterSmall
              characterName={character}
              allCharacters={allCharacters}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
