import React, { useEffect, useState } from 'react'

export default function UserDetails() {
    const [count, setCount] = useState(1);
    const [userId, setUserId] = useState(1);
    const incrementCount = () => setCount(count + 1);
    const incrementUserId = () => setUserId(userId + 1);

    // fetUserDetails should be called on initial render + when userId is changed
    const fetUserDetails = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        let userDetails = await response.json();
        console.log("userDetails:", userDetails);
    }
    useEffect(() => {
        fetUserDetails();

        return () => {
            // Cleanup logic
            console.log('This code gets called when the component is unmounted')
        }
    }, [userId]);

    useEffect(() => {
        console.log('Call this when count changes')
    }, [count]);


    return <>
        <h4>User Details using UseEffect</h4>
        <div className="border border-2 rounded-2 m-2 p-2">
            <h4>Count:{count}</h4>
            <button className="btn btn-primary" onClick={incrementCount}>Increment Count</button>
        </div>
        <div className="border border-2 rounded-2 m-2 p-2">
            <h4>userId:{userId}</h4>
            <button className="btn btn-primary" onClick={incrementUserId}>Increment user id</button>
        </div>
    </>
}
