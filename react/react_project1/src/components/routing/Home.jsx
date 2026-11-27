import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { ThemeContext } from '../../context/themeContext';


export default function Home() {
  // const userContext = useContext(UserContext);  // use the context
  // const themeContext = useContext(ThemeContext);  // use the context

  const api_url = import.meta.env.VITE_API_URL;

  return <>
    <div>Home-{api_url}</div>
    {/* <div>Logged in User: {userContext.user.name}</div>
    <div>Theme: {themeContext.theme}</div> */}
    {/* <CounterDemo/> */}
    {/* <ToDoList/> */}
    {/* <UseReducerDemo/> */}
  </>
}
