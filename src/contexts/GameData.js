import React, { createContext, useState } from 'react';

export const GameData = createContext()

export const DataProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [winnerFound, setWinnerFound] = useState(false)
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [boardValues, setBoardValues] = useState({
        "c0": {
            "player": "",
            "disabled": false
        },
        "c1": {
            "player": "",
            "disabled": false
        },
        "c2": {
            "player": "",
            "disabled": false
        },
        "c3": {
            "player": "",
            "disabled": false
        },
        "c4": {
            "player": "",
            "disabled": false
        },
        "c5": {
            "player": "",
            "disabled": false
        },
        "c6": {
            "player": "",
            "disabled": false
        },
        "c7": {
            "player": "",
            "disabled": false
        },
        "c8": {
            "player": "",
            "disabled": false
        },
    })

    const checkWinner = () => {
        if(boardValues["c0"].player === boardValues["c1"].player && boardValues["c1"].player === boardValues["c2"].player){
            return true
        }

        return false
    }

    const assignValues = (event) => {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
        const cubeIndex = event.target.id
        boardValues[cubeIndex].player = currentPlayer
        boardValues[cubeIndex].disabled = true
        const didWin = checkWinner()
        console.log(event.target.className)
        console.log(cubeIndex, currentPlayer, didWin)
    }

    const values = {
        winner: {winnerFound, setWinnerFound},
        currentPlayer,
        boardValues,
        assignValues,
        loading: { isLoading, setIsLoading }
    }

    return (
        <GameData.Provider value={values}>
            { children }
        </GameData.Provider>
    )
}