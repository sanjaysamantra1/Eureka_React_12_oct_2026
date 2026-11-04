import React, { useState } from 'react'

export default function StateDemo1() {
    //let [stateVariable ,  function to update state] = useState(initialValue);
    let [count, setCount] = useState(0);

    const increment = function () {
        setCount(count + 1);
    }
    return <>
        <h3>State Demo 1</h3>
        <div>Count: {count}</div>
        <button className="btn btn-primary" onClick={increment}>+</button>
    </>
}
