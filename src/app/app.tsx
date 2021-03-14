import React from 'react';
import './app.scss';
import { Board } from './components/board/board';

export function App(): JSX.Element {
  return (
    <div className="app">
      <Board></Board>
    </div>
  );
}
