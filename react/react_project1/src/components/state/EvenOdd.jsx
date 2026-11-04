import React, { useState } from 'react'

/* 
export default function EvenOdd() {  // Using ternary
    const [num, setNum] = useState(4);
    const increment = () => setNum(num + 1);
    return <>
        <button className="btn btn-primary" onClick={increment}>+</button>
        {num % 2 == 0 ? <div>{num} is Even</div> : <div>{num} is Odd</div>}
    </>
} 
    */

/* export default function EvenOdd() {  // Using if-else
    const [num, setNum] = useState(4);
    const increment = () => setNum(num + 1);
    let result;
    if (num % 2 == 0) {
        result = 'Even'
    } else {
        result = 'Odd'
    }

    return <>
        <div>Number: {num} is {result}</div>
        <button className="btn btn-primary" onClick={increment}>+</button>
    </>
} */


export default function EvenOdd() {  // Using &&
    const [num, setNum] = useState(4);
    const increment = () => setNum(num + 1);
    return <>
        <div>Number: {num} </div>
        {num % 2 == 0 && <div>Even Number</div>}
        {num % 2 !== 0 && <div>Odd Number</div>}
        <button className="btn btn-primary" onClick={increment}>+</button>
    </>
}

