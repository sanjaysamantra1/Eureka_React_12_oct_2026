import React from 'react'

export default function Greet({ name, msg, sayHello }) {
    return <>
        <h4>Hello {name} , {msg}</h4>
        <button className="btn btn-primary" onClick={sayHello}>Click me</button>
    </>
}
