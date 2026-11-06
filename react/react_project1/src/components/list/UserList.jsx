import userArr from './user_data.json';

export default function UserList() {
    return <>
        <h3>User List::</h3>
        <div className="container">
            <div className="row gap-1">
                {userArr.map((user) => {
                    return <div className="col">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXswuNH3uUXZ8L67GwkzRnPHTn_v34t5dCx9-l-sD5w&s=10" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{user.username}</h5>
                                    <p class="card-text">Id: {user.id}</p>
                                    <p class="card-text">{user.name}</p>
                                    <p class="card-text">{user.email}</p>
                                    <p class="card-text">{user.phone}</p>
                                    <p class="card-text">{user.address.city}</p>
                                    <a href="#" class="btn btn-primary">Details</a>
                                </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>
}
