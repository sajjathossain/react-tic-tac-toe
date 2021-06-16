import {GameData} from  '../../contexts/GameData'
import styles from './GameScore.module.css';
import {useContext} from 'react';

const GameScore = () => {
    const {currentPlayer } = useContext(GameData);
    return (
        <div>
            <h1 style={{ color: currentPlayer === "X" ? 'lightcoral' : 'lightseagreen' }}>Current Player: {currentPlayer}</h1>
        </div>
    )
}

export default GameScore
