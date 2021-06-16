import './App.css'

import * as Components from './components'

import { DataProvider } from './contexts/GameData'

function App() {
  return (
    <DataProvider>
      <div className="App">
        <div className="game-name">Tic Tac Toe</div>
        <div className="container">
          <Components.GameBoard />
          <Components.GameScore />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
