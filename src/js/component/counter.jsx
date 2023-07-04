import React from 'react';
import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const sixDigits = (n) => {
        let arr = n.toString().split('');
        while (arr.length < 6) arr.unshift('0');
        console.log(arr);
    }
    sixDigits(count);
    useEffect(()=> {
        console.log(count);
    })
    const plusOne = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={plusOne}>Click me you fuckin idiot!</button>
        </div>
    )
}

export default Counter