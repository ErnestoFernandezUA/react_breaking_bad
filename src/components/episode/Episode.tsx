import React, { useEffect } from 'react';
import './Episode.scss';

type Props = {
  episode: EpisodeType;
};

export const Episode: React.FC<Props> = ({
  episode,
}) => {
  const {
    episode_id,
    title,
    season,
    air_date,
    characters,
    episode: episode_id_season,
    // series,
  } = episode;

  useEffect(() => {
  },
  []);

  return (
    <div className="Episode">
      <p className="Episode__episode_id">{episode_id}</p>
      <p className="Episode__season">{`Season: ${season}`}</p>
      <p className="Episode__episode_id_season">{episode_id_season}</p>
      <p className="Episode__title">{title}</p>
      <p className="Episode__air_date">{air_date}</p>
      <ul className="Episode__characters">
        {characters.map(character => (
          <li key={character}>{character}</li>
        ))}
      </ul>
    </div>
  );
};
