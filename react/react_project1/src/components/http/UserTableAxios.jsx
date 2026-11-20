import React, { useEffect, useState } from 'react';
import axios from 'axios';

// fetch user data using axios library and display in table
export default function UserTableAxios() {
    const [userArr, setUserArr] = useState([]);

    const fetchUsers = async () => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUserArr(response.data);
    }
    useEffect(() => {
        fetchUsers();
    }, []); // only once - Initial Render

    return <>
        <h3>Fetch User Data Using Axios & display in table</h3>
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
