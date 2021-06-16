import React, { createContext, useState } from 'react';

export const GameData = createContext()

export const DataProvider = ({ children }) => {
    const [winnerFound, setWinnerFound] = useState(false)
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [disabled, setDisabled] = useState("")
    const [boardValues, setBoardValues] = useState([ 
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ])

    const assignValues = (event) => {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
        const cubeIndex = parseInt(event.target.id)
        boardValues[cubeIndex] = currentPlayer
        setDisabled(`disabled${currentPlayer}`)
        console.log(cubeIndex, currentPlayer)
    }

    const values = {
        winner: {winnerFound, setWinnerFound},
        currentPlayer,
        boardValues,
        assignValues,
        disabled
    }

    return (
        <GameData.Provider value={values}>
            { children }
        </GameData.Provider>
    )
}