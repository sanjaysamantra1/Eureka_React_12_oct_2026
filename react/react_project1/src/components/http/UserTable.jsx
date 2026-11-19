import React, { useEffect, useState } from 'react';

export default function UserTable() {
    const [userArr, setUserArr] = useState([]);

    const fetchUsers = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let finalApiResponse = await response.json();
        setUserArr(finalApiResponse);
    }
    useEffect(() => {
        fetchUsers();
    }, []); // only once - Initial Render

    return <>
        <h3>Fetch User Data & display in table</h3>
        <table className="table table-bordered">
            <tbody>
                {userArr.map(user => {
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}
