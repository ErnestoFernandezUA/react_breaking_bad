import React from 'react';
import './App.scss';
import { AllSeasons } from './components/AllSeasons';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <AllSeasons />
    </div>
  );
};
