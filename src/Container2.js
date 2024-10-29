import React, { useEffect, useState } from 'react';
import './Container.css';

const Grid1 = () => {

    const [element, setElement] = useState("")
    const [initialArray, setInitialArray] = useState(new Array(9).fill(null))
  const [inactive,setInactive] = useState(false)

    const hasTruthyElement = initialArray.some(element => Boolean(element));
    const [winMessage,setWinMessage] = useState(false)
const [value,setValue] = useState("")

    const handleButtonClick = (value, index) => {
       
        setValue(value)
        if (!hasTruthyElement) {
            if (value == "X") {
              
                setElement("O")
                let newArray = [...initialArray]
                newArray.splice(index, 1, value)
                setInitialArray(newArray)

            } else {
                setElement("X")
                let newArray = [...initialArray]
                newArray.splice(index, 1, value)
                setInitialArray(newArray)

            }
        }
        if (hasTruthyElement) {
            if (value == "X") {
                setElement("O")
            } else {
                setElement("X")
            }
            let newArray = [...initialArray]

            newArray.splice(index, 1, value)
            setInitialArray(newArray)

        }


    };

const checking=()=>{

    if(initialArray[0] ==`${value}` && initialArray[1] ==`${value}` && initialArray[2] == `${value}`){
         setInactive(true)
        setWinMessage(true)
    }else if(initialArray[3] ==`${value}` && initialArray[4] ==`${value}`  && initialArray[5] == `${value}` ){
        setInactive(true)
        setWinMessage(true)
    }else if(initialArray[6] ==`${value}`  && initialArray[7] ==`${value}`  && initialArray[8] == `${value}` ){
        setInactive(true)
        setWinMessage(true)
    }else if(initialArray[0] ==`${value}`  && initialArray[3] ==`${value}`  && initialArray[6] == `${value}` ){
        setInactive(true)
        setWinMessage(true)
    }else if(initialArray[1] ==`${value}`  && initialArray[4] ==`${value}`  && initialArray[7] == `${value}` ){
        setInactive(true)
        setWinMessage(true)
    }else if(initialArray[2] ==`${value}`  && initialArray[5] ==`${value}`  && initialArray[8] == `${value}` ){
        setInactive(true)
        setWinMessage(true)
    }else if(initialArray[0] ==`${value}`  && initialArray[4] ==`${value}`  && initialArray[8] == `${value}` ){
        setInactive(true)
        setWinMessage(true)
    }else if(initialArray[2] ==`${value}`  && initialArray[4] ==`${value}`  && initialArray[6] == `${value}` ){
        setInactive(true)
        setWinMessage(true)
    }
}

const restartGame=()=>{
    setInactive(false)
    setElement("")
    setWinMessage("")
    const array = new Array(9).fill(null)
    setInitialArray(array)
}

useEffect(()=>{
checking()
},[initialArray])

console.log(initialArray)
    return (
        <>
        <h1 style={{textAlign:"center"}}>Welcome To The World Of Tic Tac Toe</h1>{winMessage && <button onClick={restartGame}>Restart Game</button> }
          {winMessage && (
            <div className="win-message">
                <h1>Congratulations!</h1>
                <p>You have won the game!</p>
            </div>
        )}
        
            <div className="grid-container">
    
                <div className={`box ${initialArray[0] === "X" ? "box-x" : initialArray[0] === "O" ? "box-o" : ""}`}  >{!hasTruthyElement && <><button onClick={() => handleButtonClick("X", 0)}>X</button><button onClick={() => handleButtonClick("O", 0)}>O</button></>}{initialArray && initialArray[0]}{!initialArray?.[0] && element ? <button disabled={inactive} onClick={() => handleButtonClick(element, 0)}>{element}</button> : ""}</div>
                <div className={`box ${initialArray[1] === "X" ? "box-x" : initialArray[1] === "O" ? "box-o" : ""}`}>{!hasTruthyElement && <> <button onClick={() => handleButtonClick("X", 1)}>X</button><button onClick={() => handleButtonClick("O", 1)} >O</button></>}{initialArray && initialArray[1]}{!initialArray?.[1] && element ? <button disabled={inactive} onClick={() => handleButtonClick(element, 1)}>{element}</button> : ""}</div>
                <div className={`box ${initialArray[2] === "X" ? "box-x" : initialArray[2] === "O" ? "box-o" : ""}`} >{!hasTruthyElement && <><button onClick={() => handleButtonClick("X", 2)}>X</button><button onClick={() => handleButtonClick("O", 2)}>O</button></>}{initialArray && initialArray[2]}{!initialArray?.[2] && element ? <button disabled={inactive} onClick={() => handleButtonClick(element, 2)}>{element}</button> : ""}</div>
    
    
    
                <div className={`box ${initialArray[3] === "X" ? "box-x" : initialArray[3] === "O" ? "box-o" : ""}`}>{!hasTruthyElement && <><button onClick={() => handleButtonClick("X", 3)}>X</button><button onClick={() => handleButtonClick("O", 3)}>O</button></>}{initialArray && initialArray[3]}{!initialArray?.[3] && element ? <button disabled={inactive} onClick={() => handleButtonClick(element, 3)}>{element}</button> : ""}</div>
    
                <div className={`box ${initialArray[4] === "X" ? "box-x" : initialArray[4] === "O" ? "box-o" : ""}`} >{!hasTruthyElement && <><button onClick={() => handleButtonClick("X", 4)}>X</button><button onClick={() => handleButtonClick("O", 4)}>O</button></>}{initialArray && initialArray[4]}{!initialArray?.[4] && element ? <button disabled={inactive} onClick={() => handleButtonClick(element, 4)}>{element}</button> : ""}</div>
                <div className={`box ${initialArray[5] === "X" ? "box-x" : initialArray[5] === "O" ? "box-o" : ""}`} >{!hasTruthyElement && <><button onClick={() => handleButtonClick("X", 5)}>X</button><button onClick={() => handleButtonClick("O", 5)}>O</button></>}{initialArray && initialArray[5]}{!initialArray?.[5] && element ? <button disabled={inactive} onClick={() => handleButtonClick(element, 5)}>{element}</button> : ""}</div>
                <div className={`box ${initialArray[6] === "X" ? "box-x" : initialArray[6] === "O" ? "box-o" : ""}`} >{!hasTruthyElement && <><button onClick={() => handleButtonClick("X", 6)}>X</button><button onClick={() => handleButtonClick("O", 6)}>O</button></>}{initialArray && initialArray[6]}{!initialArray?.[6] && element ? <button disabled={inactive} onClick={() => handleButtonClick(element, 6)}>{element}</button> : ""}</div>
                <div className={`box ${initialArray[7] === "X" ? "box-x" : initialArray[7] === "O" ? "box-o" : ""}`} >{!hasTruthyElement && <><button onClick={() => handleButtonClick("X", 7)}>X</button><button onClick={() => handleButtonClick("O", 7)}>O</button></>}{initialArray && initialArray[7]}{!initialArray?.[7] && element ? <button disabled={inactive} onClick={() => handleButtonClick(element, 7)}>{element}</button> : ""}</div>
                <div className={`box ${initialArray[8] === "X" ? "box-x" : initialArray[8] === "O" ? "box-o" : ""}`}>{!hasTruthyElement && <><button onClick={() => handleButtonClick("X", 8)}>X</button><button onClick={() => handleButtonClick("O", 8)}>O</button></>}{initialArray && initialArray[8]}{!initialArray?.[8] && element ? <button disabled={inactive} onClick={() => handleButtonClick(element, 8)}>{element}</button> : ""}</div>
    
    
            </div>
        </>
    
    );




};

export default Grid1;
