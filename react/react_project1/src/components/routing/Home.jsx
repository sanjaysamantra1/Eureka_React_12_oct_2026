import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { ThemeContext } from '../../context/themeContext';

export default function Home() {
  const userContext = useContext(UserContext);  // use the context
  const themeContext = useContext(ThemeContext);  // use the context

  return <>
    <div>Home</div>
    <div>Logged in User: {userContext.user.name}</div>
    <div>Theme: {themeContext.theme}</div>
  </>
}
