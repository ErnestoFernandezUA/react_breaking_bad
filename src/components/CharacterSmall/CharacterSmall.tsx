/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from 'react';
import './CharacterSmall.scss';

type Props = {
  characterName: string;
  allCharacters: {[key: string]: CharacterType} | null;
};

export const CharacterSmall: React.FC<Props> = ({ characterName, allCharacters }) => {
  // eslint-disable-next-line no-console
  console.log('characterName', characterName);

  if (allCharacters && allCharacters[characterName]) {
    // eslint-disable-next-line no-console
    console.log(allCharacters[characterName].char_id);
  }

  useEffect(() => {
  },
  []);

  return (
    <div
      className="CharacterSmall"
      // style={allCharacters && { backgroundImage: `url("${allCharacters[characterName].img}")` }}
    >
      {characterName}
    </div>
  );
};
