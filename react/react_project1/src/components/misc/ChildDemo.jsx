import React from 'react'

function ChildDemo(props) {
    console.log('Child rendering...')
    return <>
        <div>Child Component</div>
        <div>courseName:{props.courseName}</div>
        <button onClick={props.sayHello}>Say Hello</button>
    </>
}
export default React.memo(ChildDemo);
// export default ChildDemo;
