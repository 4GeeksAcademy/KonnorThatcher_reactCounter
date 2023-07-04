import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(interval);
    })

    const numDivBootstrap = "col ms-2 py-4 border-start border-end border-3 border-dark rounded bg-dark bg-opacity-50";

    const sixDigits = (n) => {
        let arr = n.toString().split('');
        while (arr.length < 6) arr.unshift('0');
        return arr.map((n)=> {
            return (
                <div className={numDivBootstrap} >
                    <h1 className='text-white m-0'>{n}</h1>
                </div>
            );
        });
    }
    
    return (
        <>
            <div className={`${numDivBootstrap} d-flex justify-content-center align-items-center`}>
                <i className="fa-solid fa-stopwatch text-white display-6"></i>
            </div>
            {sixDigits(count)}
        </>
    )
}

export default Counter