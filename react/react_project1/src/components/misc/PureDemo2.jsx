import { useState } from "react"

export default function PureDemo2() {
    const [courseName, setCourseName] = useState('ReactJS');
    const updateCourseName = () => {
        setCourseName('React')
    }
    return <>
        {console.log('Rendering...')}
        <div>Pure Component</div>
        <div>courseName:{courseName}</div>
        <button className="btn btn-primary" onClick={updateCourseName}>update</button>
    </>
}
// Every Functional Component is Pure by default