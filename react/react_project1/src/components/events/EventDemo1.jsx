import React from 'react'

export default function EventDemo1() {
    const f1 = (e) => {
        console.log('F1 called...')
        console.log(e, e.target);
        console.log(e.nativeEvent);
    }
    const increment = (event) => {
        console.log(event.type, event.target, event.currentTarget)
    }
    const addition = (num1, num2, event) => {
        console.log(`Addition of ${num1} & ${num2} is ${num1 + num2}, eventTye:${event.type}`)
    }
    return <>
        <div>EventDemo1 Component</div>
        <button className="btn btn-primary" onClick={f1}>Click Me</button>

        <button onClick={increment} className="btn btn-secondary mx-2">
            <span>Increment</span>
        </button>

        {/* <button className="btn btn-primary" onClick={addition(10,20)}>Addition</button> */}
        <button className="btn btn-primary" onClick={(event) => addition(10, 20, event)}>Addition</button>

        <div onClick={() => console.log("Div clicked...")}>
            <p onClick={(e) =>{
                console.log("Paragraph clicked...")
                e.stopPropagation();
            }}>
                <button onClick={() => console.log("Button clicked...")}>
                    <span onClick={() => console.log("Span clicked...")}>Click Me</span>
                </button>
            </p>
        </div>

        <div onClickCapture={() => console.log("Div clicked...")}>
            <p onClickCapture={() => console.log("Paragraph clicked...")}>
                <button onClickCapture={() => console.log("Button clicked...")}>
                    <span onClickCapture={() => console.log("Span clicked...")}>Click Me</span>
                </button>
            </p>
        </div>
    </>
}
