import './App.css'

import * as Components from './components'

import { DataProvider } from './contexts/GameData'

function App() {
  return (
    <DataProvider>
      <div className="App">
        <div className="container">
          <Components.GameScore />
          <Components.GameBoard />
        </div>
        <div className="game-name">Tic Tac Toe</div>
      </div>
    </DataProvider>
  );
}

export default App;
