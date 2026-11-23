import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function UserDetail() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, [id]);
    if (!user) {
        return <h3>Loading User...</h3>;
    }
    return (
        <>
            <h2>User Details</h2>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </>
    );
}
