import React, {
  useEffect, useState,
} from 'react';
import { requestPoster } from '../../api/poster';
import { Loader } from '../Loader';
import './Poster.scss';

type Props = {
  nameOfSeries: string;
};

export const Poster: React.FC<Props> = ({ nameOfSeries }) => {
  // eslint-disable-next-line no-console
  console.log(nameOfSeries);
  const [showLoaderPoster, setShowLoaderPoster] = useState(false);
  const [urlPoster, setUrlPoster] = useState('');

  const loadPoster = async () => {
    setShowLoaderPoster(true);

    try {
      const urlPosterFromServer = await requestPoster(nameOfSeries);

      setUrlPoster(urlPosterFromServer.Poster);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error', error);
    } finally {
      setShowLoaderPoster(false);
    }
  };

  useEffect(() => {
    loadPoster();
  },
  []);

  // eslint-disable-next-line no-console
  console.log(urlPoster);

  return (
    <div
      className="Poster"
      style={{ backgroundImage: `url("${urlPoster}")` }}
    >
      {showLoaderPoster && (
        <Loader />
      )}
    </div>
  );
};
