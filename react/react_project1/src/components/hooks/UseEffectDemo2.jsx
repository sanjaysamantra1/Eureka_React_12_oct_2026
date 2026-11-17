import React, { useEffect, useState } from 'react'

export default function UseEffectDemo2() {
    const [a, setA] = useState(10);
    const [b, setB] = useState(20);
    const [c, setC] = useState(30);

    useEffect(() => {
        console.log("use effect called");
    },[a,b]);

    // 1. No 2nd param : Initial render + state change
    // 2. [] as 2nd param : Initial render
    // 3. [a,b] : Initial render + only if a,b state changes

    return <>
        <div>UseEffect Demo2</div>
        <div>a:{a}  b:{b}  c:{c}</div>

        <button onClick={() => setA(15)}>update A</button>
        <button onClick={() => setB(25)} className="mx-2">update B</button>
        <button onClick={() => setC(35)}>update C</button>
    </>
}
