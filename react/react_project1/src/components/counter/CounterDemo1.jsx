import { useState } from "react";
import React from 'react';

export default function CounterDemo1() {
    console.log('CounterDemo1 is being rendered...'); // Rendering Phase
    console.log(React);
    
    /* var count = 0;  // Local Variable
    const increment = () => {
        count = count + 1;  // UI is not re-rendered
        console.log('Increment...', count);
    }  */
   

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(val => val + 1); // when state value changes, UI is re-rendered
    }

    return <>
        <h1>React Version: {React.version}</h1>
        <h2>Counter Example</h2>
        <div>Count: {count}</div>
        <button onClick={increment}>Increment</button>
    </>
}