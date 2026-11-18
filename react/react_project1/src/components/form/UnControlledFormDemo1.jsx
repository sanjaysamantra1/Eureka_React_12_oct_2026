import React, { useRef } from 'react'

export default function UnControlledFormDemo1() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

    const addition = () => {
        const val1 = +(inputRef1.current?.value || 0);
        const val2 = +(inputRef2.current?.value || 0);
        console.log(`Addition of ${val1} and ${val2} is ${val1 + val2}`);
    };
    return <div>
        <h4>Addition of 2 numbers: (Uncontrolled Form)</h4>
        num1: <input ref={inputRef1} />
        num2: <input ref={inputRef2} />
        <button onClick={addition}>Add</button>
    </div>
}
