import './App.css'

import * as Components from './components'

function App() {
  return (
    <div className="App">
      <div className="game-name">Tic Tac Toe</div>
      <div className="container">
        <Components.GameBoard />
        <Components.GameScore />
      </div>
    </div>
  );
}

export default App;
