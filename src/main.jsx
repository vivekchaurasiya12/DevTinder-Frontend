import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { BROWSER_ROUTES } from "./routes/browser-routes"
import App from './App.jsx'
import './index.css'
// import Home from './Home.jsx'
import Profile from './pages/Profile.jsx'
import Login from './pages/Login.jsx'
import Connection from './pages/Connection.jsx'

const APP_PATH=import.meta.env.VITE_APP_PATH;

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter basename={APP_PATH}>
 <Routes>
  <Route path={BROWSER_ROUTES.login} element={<Login/>} />
  <Route path={BROWSER_ROUTES.home.base} element={<App/>} >
   <Route
            path={BROWSER_ROUTES.home.profile}
            element={<Profile />}
          />
          <Route
            path={BROWSER_ROUTES.home.connection}
            element={ <Connection  />}
          />
    </Route>
 
 </Routes>

  </BrowserRouter>
  </StrictMode>,
)
