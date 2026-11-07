import React from 'react'

export default function UserCard(props) {
    const { id, name, username, email, phone, address } = props.user; // props de-structuring
    return <div class="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLXswuNH3uUXZ8L67GwkzRnPHTn_v34t5dCx9-l-sD5w&s=10" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">{username}</h5>
            <p class="card-text">Id: {id}</p>
            <p class="card-text">{name}</p>
            <p class="card-text">{email}</p>
            <p class="card-text">{phone}</p>
            <p class="card-text">{address.city}</p>
            <a href="#" class="btn btn-primary">Details</a>
        </div>
    </div>
}
