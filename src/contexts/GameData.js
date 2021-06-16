import { createContext, useState } from 'react';

export const GameData = createContext()

export const DataProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [winnerFound, setWinnerFound] = useState(false)
    const [currentPlayer, setCurrentPlayer] = useState("X")
    const [count, setCount] = useState(0)
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

    const resetGame = () => {
         for(const i in boardValues){
             boardValues[`${i}`].player = ""
             boardValues[`${i}`].disabled = false
         }

         setWinnerFound(false)
         setCount(0)
    }

    const checkWinner = () => {
        setCount(count + 1)
    
        // ! 0 1 2
        if(boardValues["c0"].player !== "" && boardValues["c1"].player !== "" && boardValues["c2"].player !== ""){
            if(boardValues["c0"].player === boardValues["c1"].player && boardValues["c1"].player === boardValues["c2"].player){
                return true
            }
        }

        // ! 3 4 5
        if(boardValues["c3"].player !== "" && boardValues["c4"].player !== "" && boardValues["c6"].player !== ""){
            if(boardValues["c3"].player === boardValues["c4"].player && boardValues["c4"].player === boardValues["c5"].player){
                return true
            }
        }

        // ! 6 7 8
        if(boardValues["c6"].player !== "" && boardValues["c7"].player !== "" && boardValues["c8"].player !== ""){
            if(boardValues["c6"].player === boardValues["c7"].player && boardValues["c7"].player === boardValues["c8"].player){
                return true
            }
        }

        // ! 0 3 6
        if(boardValues["c0"].player !== "" && boardValues["c3"].player !== "" && boardValues["c6"].player !== ""){
            if(boardValues["c0"].player === boardValues["c3"].player && boardValues["c3"].player === boardValues["c6"].player){
                return true
            }
        }

        // ! 1 4 7
        if(boardValues["c1"].player !== "" && boardValues["c4"].player !== "" && boardValues["c7"].player !== ""){
            if(boardValues["c1"].player === boardValues["c4"].player && boardValues["c4"].player === boardValues["c7"].player){
                return true
            }
        }

        // ! 2 5 8
        if(boardValues["c2"].player !== "" && boardValues["c5"].player !== "" && boardValues["c8"].player !== ""){
            if(boardValues["c2"].player === boardValues["c5"].player && boardValues["c5"].player === boardValues["c8"].player){
                return true
            }
        }

        // ! 0 4 8
        if(boardValues["c0"].player !== "" && boardValues["c4"].player !== "" && boardValues["c8"].player !== ""){
            if(boardValues["c0"].player === boardValues["c4"].player && boardValues["c4"].player === boardValues["c8"].player){
                return true
            }
        }

        // ! 2 4 6
        if(boardValues["c2"].player !== "" && boardValues["c4"].player !== "" && boardValues["c6"].player !== ""){
            if(boardValues["c2"].player === boardValues["c4"].player && boardValues["c4"].player === boardValues["c6"].player){
                return true
            }
        }


        return false
    }

    const assignValues = (event) => {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
        const cubeIndex = event.target.id
        boardValues[cubeIndex].player = currentPlayer
        boardValues[cubeIndex].disabled = true
        const didWin = checkWinner()
        if(didWin){
            setWinnerFound(true)
        }

        console.log(event.target.className)
        console.log(cubeIndex, currentPlayer, didWin)
    }

    const values = {
        winnerFound,
        currentPlayer,
        boardValues,
        assignValues,
        resetGame,
        count,
        loading: { isLoading, setIsLoading }
    }

    return (
        <GameData.Provider value={values}>
            { children }
        </GameData.Provider>
    )
}