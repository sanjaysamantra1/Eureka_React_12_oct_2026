import React, { useEffect, useState } from 'react'

export default function UseEffectDemo1() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);  // state update is asynchronous
        console.log('inside increment function, Count: ', count);
    }

    useEffect(() => {  // called after state gets updated
        console.log('useEffect called...', count)
    },[]);

    return <>
        <div>UseEffect Demo1</div>
        <div>Count: {count}</div>
        <button onClick={increment}>Increment</button>
    </>
}
