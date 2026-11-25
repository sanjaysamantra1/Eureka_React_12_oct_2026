import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import { ThemeContext } from '../../context/themeContext';

export default function ContactUs() {
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);  // use the context

  return <>
    <div>ContactUs</div>
    <div>Logged in User: {userContext.user.name}</div>
    <button onClick={() => userContext.setLoggedinUser('Sanjay')}>Login</button>
    <hr />
    <div>Theme: {themeContext.theme}</div>
    <button onClick={themeContext.toggleTheme}>Toggle Theme</button>
  </>
}
