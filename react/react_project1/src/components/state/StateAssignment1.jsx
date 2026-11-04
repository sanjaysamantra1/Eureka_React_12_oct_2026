import React, { useState } from 'react'

export default function StateAssignment1() {
    const [flag, setFlag] = useState(true);
    const toggleFlag = () => {
        setFlag(!flag)
    }
    return <>
        {flag ? <h3>Hellooooooooooooo, Good Morning</h3> : null}
        <button onClick={toggleFlag}> {flag?'HIDE':'SHOW'} </button>
    </>
}
