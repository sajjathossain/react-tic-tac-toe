import {GameData} from  '../../contexts/GameData'
import styles from './GameScore.module.css';
import {useContext} from 'react';

const GameScore = () => {
    const {currentPlayer } = useContext(GameData);
    return (
        <>
            <div className={styles.gameScore} style={{ color: currentPlayer === "X" ? 'lightcoral' : 'lightseagreen' }}>Current Player: {currentPlayer}</div>
        </>
    )
}

export default GameScore
