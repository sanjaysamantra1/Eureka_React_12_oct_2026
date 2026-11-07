import userArr from './user_data.json';
import UserCard from './UserCard';

export default function UserList() {
    return <>
        <h3>User List</h3>
        <div className="container">
            <div className="row gap-1">
                {userArr.map((user) => {
                    return <div className="col">
                        <UserCard user={user} />
                    </div>
                })}
            </div>
        </div>
    </>
}
