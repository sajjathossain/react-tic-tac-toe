import {useContext, useEffect, useState} from 'react'

import {GameData} from  '../../contexts/GameData'
import styles from './GameBoard.module.css';

const GameBoard = () => {
  const [cubeData, setCubeData] = useState([])

  const { winner, currentPlayer, boardValues, assignValues, loading} = useContext(GameData)

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
      <div className={styles.container}>
        <div className={`${styles.gameCube} ${cubeData["c0"].disabled ? styles.disabled : ""}`} id="c0" onClick={assignValues} >{`${cubeData["c0"].player}`}</div>
        <div className={`${styles.gameCube} ${cubeData["c1"].disabled ? styles.disabled : ""}`} id="c1" onClick={assignValues} >{`${cubeData["c1"].player}`}</div>
        <div className={`${styles.gameCube} ${cubeData["c2"].disabled ? styles.disabled : ""}`} id="c2" onClick={assignValues} >{`${cubeData["c2"].player}`}</div>
        <div className={`${styles.gameCube} ${cubeData["c3"].disabled ? styles.disabled : ""}`} id="c3" onClick={assignValues} >{`${cubeData["c3"].player}`}</div>
        <div className={`${styles.gameCube} ${cubeData["c4"].disabled ? styles.disabled : ""}`} id="c4" onClick={assignValues} >{`${cubeData["c4"].player}`}</div>
        <div className={`${styles.gameCube} ${cubeData["c5"].disabled ? styles.disabled : ""}`} id="c5" onClick={assignValues} >{`${cubeData["c5"].player}`}</div>
        <div className={`${styles.gameCube} ${cubeData["c6"].disabled ? styles.disabled : ""}`} id="c6" onClick={assignValues} >{`${cubeData["c6"].player}`}</div>
        <div className={`${styles.gameCube} ${cubeData["c7"].disabled ? styles.disabled : ""}`} id="c7" onClick={assignValues} >{`${cubeData["c7"].player}`}</div>
        <div className={`${styles.gameCube} ${cubeData["c8"].disabled ? styles.disabled : ""}`} id="c8" onClick={assignValues} >{`${cubeData["c8"].player}`}</div>
      </div>
  )
}

export default GameBoard
