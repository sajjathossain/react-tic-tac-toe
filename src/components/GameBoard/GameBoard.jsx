import {useContext, useEffect, useState} from 'react'

import {GameData} from  '../../contexts/GameData'
import styles from './GameBoard.module.css';

const GameBoard = () => {
  const [cubeData, setCubeData] = useState([])

  const { winner, currentPlayer, boardValues, assignValues, disabled } = useContext(GameData)

  useEffect(() => {
    const getData = async () => {
      setCubeData(boardValues)
      console.log(boardValues)
    }

    getData()
  }, [])
  
  return (
      <div className={styles.container}>
        <div className={`${styles.gameCube} `} id="0" onClick={assignValues} >{cubeData[0]}</div>
        <div className={`${styles.gameCube} `} id="1" onClick={assignValues} >{cubeData[1]}</div>
        <div className={`${styles.gameCube} `} id="2" onClick={assignValues} >{cubeData[2]}</div>
        <div className={`${styles.gameCube} `} id="3" onClick={assignValues} >{cubeData[3]}</div>
        <div className={`${styles.gameCube} `} id="4" onClick={assignValues} >{cubeData[4]}</div>
        <div className={`${styles.gameCube} `} id="5" onClick={assignValues} >{cubeData[5]}</div>
        <div className={`${styles.gameCube} `} id="6" onClick={assignValues} >{cubeData[6]}</div>
        <div className={`${styles.gameCube} `} id="7" onClick={assignValues} >{cubeData[7]}</div>
        <div className={`${styles.gameCube} `} id="8" onClick={assignValues} >{cubeData[8]}</div>
      </div>
  )
}

export default GameBoard
