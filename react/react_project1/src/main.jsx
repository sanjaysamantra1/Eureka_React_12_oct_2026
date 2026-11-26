import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router';
import { UserProvider } from './context/userContext.jsx';
import { ThemeProvider } from './context/themeContext.jsx';
import { Provider } from 'react-redux';
import { myStore } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <Provider store={myStore}>
            <App />
          </Provider>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
)

// App - Component ( section/part/portion in a webpage)