import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'

export default function ContactUs() {
  const userContext = useContext(UserContext);

  return <>
    <div>ContactUs</div>
    <div>Logged in User: {userContext.user.name}</div>
    <button onClick={()=>userContext.setLoggedinUser('Sanjay')}>Login</button>
  </>
}
