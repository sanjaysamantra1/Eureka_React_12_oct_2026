import React, { useState } from 'react'

export default function ControlledFormDemo1() {
    const [num1, setNum1] = useState(10);
    const [num2, setNum2] = useState(20);

    const num1ChangeHandler = (e) => {
        setNum1(e.target.value)
    }
    const num2ChangeHandler = (e) => {
        setNum2(e.target.value)
    }
    return <>
        <h4>Addition Example(Controlled Form) </h4>
        <form>
            <p>
                Number-1:
                <input type="number" value={num1} onInput={num1ChangeHandler} />
            </p>
            <p>
                Number-2:
                <input type="number" value={num2} onInput={num2ChangeHandler} />
            </p>
            <p>Addition of {num1} and {num2} is {+num1 + +num2}</p>
        </form>
    </>
}
