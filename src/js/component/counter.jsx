import React from 'react';
import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const sixDigits = (n) => {
        let arr = n.toString().split('');
        while (arr.length < 6) arr.unshift('0');
        return arr;
    }
    
    const htmlNum = sixDigits(count).map((n) => {
        return (
            <div className='ms-2 px-2 border-start border-end border-3 border-secondary rounded bg-dark'>
                <h1 className='text-light'>{n}</h1>
            </div>
        );
    })

    const plusOne = () => {
        setCount(count + 1);
    }

    return (
        <div className='mt-5'>
            <div className='d-flex flex-row justify-content-center mb-3'>{htmlNum}</div>
            <button onClick={plusOne}>Click me you goofy idiot!</button>
        </div>
    )
}

export default Counter