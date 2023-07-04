import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("Why does it break?");
            setCount(count + 1);
        }, 1000);
        return () => clearInterval(interval);
    })

    const sixDigits = (n) => {
        let arr = n.toString().split('');
        while (arr.length < 6) arr.unshift('0');
        return arr.map((n)=> {
            return (
                <div className='ms-2 px-2 border-start border-end border-3 border-secondary rounded bg-dark'>
                    <h1 className='text-light px-1'>{n}</h1>
                </div>
            );
        });
    }
    
    return (
        <div className='mt-5'>
            <div className='d-flex flex-row justify-content-center mb-3'>{sixDigits(count)}</div>
        </div>
    )
}

export default Counter