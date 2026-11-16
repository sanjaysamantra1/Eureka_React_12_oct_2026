import { useState } from 'react';
import ChildDemo from './ChildDemo'

export default function ParentDemo() {
    console.log('Parent rendering...')
    const [count, setCount] = useState(0);
    const [courseName, setCourseName] = useState('ReactJS');
    return <>
        <div>Parent Component</div>
        <div>count:{count}</div>
        <button className="btn btn-primary mx-2" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="btn btn-secondary" onClick={() => setCourseName('Angular')}>update course</button>
        <ChildDemo courseName={courseName} />
    </>
}
