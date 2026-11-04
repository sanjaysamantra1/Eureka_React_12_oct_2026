import React, { useEffect, useState } from 'react'

export default function StateDemo1() {
    //let [stateVariable ,  function to update state] = useState(initialValue);
    let [count, setCount] = useState(0);

    const increment = function () {
        setCount(count + 1);  // asynchronous
        // setCount((prevState) => prevState + 1);
        // setCount((prevState) => prevState + 1);
        // setCount((prevState) => prevState + 1);
        // setCount((prevState) => prevState + 1);
        // setCount((prevState) => prevState + 1);
        console.log('Count: ', count); // we print old value here, this line gets called before state update
    }
    const decrement = function () {
        setCount(count - 1);
    }
    const reset = function () {
        setCount(0);
    }

    useEffect(() => {  // hook / pre-defined method, after state change
        console.log('Count inside useEffect: ', count);
    })
    return <>
        <h3>State Demo 1</h3>
        <div>Count: {count}</div>
        <button className="btn btn-secondary" onClick={decrement}>Decrement</button>
        <button className="btn btn-danger mx-2" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={increment}>Increment</button>
    </>
}
