import {useContext, useEffect, useState} from 'react'

import {GameData} from  '../../contexts/GameData'
import styles from './GameBoard.module.css';

const GameBoard = () => {
  const [cubeData, setCubeData] = useState([])
  const { winnerFound, currentPlayer, boardValues, assignValues, resetGame, count, loading} = useContext(GameData)
  const winningStyles = { 
    pointerEvents: winnerFound ? 'none' : 'initial',
    opacity: winnerFound ? 0.5 : 1,
    filter: winnerFound ? 'grayscale(65%)' : 'grayscale(0%)',
  }

  useEffect(() => {
    const getData = async () => {
      setCubeData(boardValues)
      loading.setIsLoading(false)
      console.log(boardValues["c0"])
    }

    getData()
  }, [boardValues, currentPlayer])
  
  return (
      loading.isLoading ? <h2>Loading...</h2> :
      <div className={styles.parent}>
        <div className={styles.container} style={winningStyles}>
          <div className={`${styles.gameCube} ${cubeData["c0"].disabled ? `${styles.disabled} ${cubeData["c0"].player}` : ""}`} id="c0" onClick={assignValues} >{`${cubeData["c0"].player}`}</div>
          <div className={`${styles.gameCube} ${cubeData["c1"].disabled ? `${styles.disabled} ${cubeData["c1"].player}` : ""}`} id="c1" onClick={assignValues} >{`${cubeData["c1"].player}`}</div>
          <div className={`${styles.gameCube} ${cubeData["c2"].disabled ? `${styles.disabled} ${cubeData["c2"].player}` : ""}`} id="c2" onClick={assignValues} >{`${cubeData["c2"].player}`}</div>
          <div className={`${styles.gameCube} ${cubeData["c3"].disabled ? `${styles.disabled} ${cubeData["c3"].player}` : ""}`} id="c3" onClick={assignValues} >{`${cubeData["c3"].player}`}</div>
          <div className={`${styles.gameCube} ${cubeData["c4"].disabled ? `${styles.disabled} ${cubeData["c4"].player}` : ""}`} id="c4" onClick={assignValues} >{`${cubeData["c4"].player}`}</div>
          <div className={`${styles.gameCube} ${cubeData["c5"].disabled ? `${styles.disabled} ${cubeData["c5"].player}` : ""}`} id="c5" onClick={assignValues} >{`${cubeData["c5"].player}`}</div>
          <div className={`${styles.gameCube} ${cubeData["c6"].disabled ? `${styles.disabled} ${cubeData["c6"].player}` : ""}`} id="c6" onClick={assignValues} >{`${cubeData["c6"].player}`}</div>
          <div className={`${styles.gameCube} ${cubeData["c7"].disabled ? `${styles.disabled} ${cubeData["c7"].player}` : ""}`} id="c7" onClick={assignValues} >{`${cubeData["c7"].player}`}</div>
          <div className={`${styles.gameCube} ${cubeData["c8"].disabled ? `${styles.disabled} ${cubeData["c8"].player}` : ""}`} id="c8" onClick={assignValues} >{`${cubeData["c8"].player}`}</div>
        </div>

        <div className={styles.winningCard} style={{ color: currentPlayer === "X" ? 'lightseagreen' : 'lightcoral', zIndex: winnerFound || count === 9 ? 2 : -1 }}>
            <div>
              { count === 9 ? "The Game Was A Tie!" : `The Winner is ${currentPlayer === "X" ? "O" : "X"}!`}
            </div>
            <button className={styles.resetButton} onClick={() => { resetGame() }}>Reset</button>
        </div>
      </div>
  )
}

export default GameBoard
