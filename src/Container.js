import React, { useEffect, useState } from 'react';
import './Container.css';

const Grid = () => {

    const [data, setData] = useState([])
    let timer;

    const handleClick = (args) => {
        if (data?.length > 0) {
            setData([...data, args])
        } else {
            setData([args])
        }


    }

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


    return (
        <div className="grid-container">
            <div className={`box ${data?.includes(1) ? 'clicked' : ''}`} onClick={() => handleClick(1)}></div>
            <div className={`box ${data?.includes(2) ? 'clicked' : ''}`} onClick={() => handleClick(2)}></div>
            <div className={`box ${data?.includes(3) ? 'clicked' : ''}`} onClick={() => handleClick(3)} ></div>
            <div className={`box ${data?.includes(4) ? 'clicked' : ''}`} onClick={() => handleClick(4)} ></div>
            <div className={`box ${data?.includes(5) ? 'clicked' : ''}`} onClick={() => handleClick(5)}></div>
            <div className={`box ${data?.includes(6) ? 'clicked' : ''}`} onClick={() => handleClick(6)} ></div>
            <div className={`box ${data?.includes(7) ? 'clicked' : ''}`} onClick={() => handleClick(7)} ></div>
            <div className={`box ${data?.includes(8) ? 'clicked' : ''}`} onClick={() => handleClick(8)}></div>
            <div className={`box ${data?.includes(9) ? 'clicked' : ''}`} onClick={() => handleClick(9)}></div>
        </div>
    );
};

export default Grid;
