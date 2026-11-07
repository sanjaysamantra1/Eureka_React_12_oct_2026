import React from 'react'

export default function UserCard(props) {
    return <div class="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXswuNH3uUXZ8L67GwkzRnPHTn_v34t5dCx9-l-sD5w&s=10" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{props.user.username}</h5>
            <p class="card-text">Id: {props.user.id}</p>
            <p class="card-text">{props.user.name}</p>
            <p class="card-text">{props.user.email}</p>
            <p class="card-text">{props.user.phone}</p>
            <p class="card-text">{props.user.address.city}</p>
            <a href="#" class="btn btn-primary">Details</a>
        </div>
    </div>
}
