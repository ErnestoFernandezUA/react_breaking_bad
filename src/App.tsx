import React from 'react';
import './App.scss';
import { Seasons } from './components/AllSeasons';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Seasons />
    </div>
  );
};
