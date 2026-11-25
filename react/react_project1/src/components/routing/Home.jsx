import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';

export default function Home() {
  const userContext = useContext(UserContext);  // use the context
  console.log(userContext)
  return <>
    <div>Home</div>
    <div>Logged in User: {userContext.user.name}</div>
  </>
}
