import React, { useEffect, useState } from 'react';
import './Container.css';

const Grid = () => {

    const [data, setData] = useState([])
    const [box,setBox] = useState([])
    const [option,setOption] = useState(null)
    const [option2,setOption2] = useState(null)
    const [option3,setOption3] = useState([1,2,3,4,5,6,7,8,9])
  
const handleButtonClick=(value)=>{

        setOption(value)
if(value == "X"){
    setOption2("O")
}else{
    setOption2("X")
}

    
}
    const handleClick = (args) => {
        if (data?.length > 0) {
            setData([...data, args])
        } else {
            setData([args])
        }

        // if (option3?.length > 0) {
        //     setOption3([...option3,args])
        // } else {
        //     setOption3([args])
        // }

    }
console.log(option3)
    useEffect(() => {
        let newArray = [...data]
        let timer;
        if (data.length > 0) {

            timer = setTimeout(() => {
                newArray.pop()
                setData(newArray)

            }, 1200)
            
        }

        return () => clearTimeout(timer);
       
    }, [data])

console.log(option3[0])
    return (
        <>


        {/* <div>{option3.map((item)=>{
            return (
                <div>{item}</div>
            )
        })}</div> */}
        <div className="grid-container">
            
            <div className={`box ${data?.includes(1) ? 'clicked' : ''}`} onClick={() => handleClick(1)}>{option3[0]}</div>
            <div className={`box ${data?.includes(2) ? 'clicked' : ''}`} onClick={() => handleClick(2)}>{option3[1]}</div>
            <div className={`box ${data?.includes(3) ? 'clicked' : ''}`} onClick={() => handleClick(3)}>{option3[2]}</div>
            <div className={`box ${data?.includes(4) ? 'clicked' : ''}`} onClick={() => handleClick(4)}>{option3[3]}</div>
            <div className={`box ${data?.includes(5) ? 'clicked' : ''}`} onClick={() => handleClick(5)}>{option3[4]}</div>

            <div className={`box ${data?.includes(6) ? 'clicked' : ''}`} onClick={() => handleClick(6)}>{option3[5]}</div>
            <div className={`box ${data?.includes(7) ? 'clicked' : ''}`} onClick={() => handleClick(7)}>{option3[6]}</div>
            <div className={`box ${data?.includes(8) ? 'clicked' : ''}`} onClick={() => handleClick(8)}>{option3[7]}</div>
            <div className={`box ${data?.includes(9) ? 'clicked' : ''}`} onClick={() => handleClick(9)}>{option3[8]}</div>
              {/* <button className={`box ${data?.includes(1) ? 'clicked' : ''}`} onClick={() => handleClick(1)}></button>
            <button className={`box ${data?.includes(2) ? 'clicked' : ''}`} onClick={() => handleClick(2)}></button>
<button className={`box ${data?.includes(3) ? 'clicked' : ''}`} onClick={() => handleClick(3)}></button>
<button className={`box ${data?.includes(4) ? 'clicked' : ''}`} onClick={() => handleClick(4)}></button>
<button className={`box ${data?.includes(5) ? 'clicked' : ''}`} onClick={() => handleClick(5)}></button>
<button className={`box ${data?.includes(6) ? 'clicked' : ''}`} onClick={() => handleClick(6)}></button>
<button className={`box ${data?.includes(7) ? 'clicked' : ''}`} onClick={() => handleClick(7)}></button>
<button className={`box ${data?.includes(8) ? 'clicked' : ''}`} onClick={() => handleClick(8)}></button>
<button className={`box ${data?.includes(9) ? 'clicked' : ''}`} onClick={() => handleClick(9)}></button> */}

        </div>
        </>
    );
};

export default Grid;
