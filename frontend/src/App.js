import React, {useEffect, useState } from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { userContext } from './context/context';
import Page404 from './pages/Page404';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
export default function App() {

  const [user,setUser] = useState();
  const [userToken,setUserToken] = useState();

   useEffect(()=>{
    const getUser = sessionStorage.getItem('user');
    setUserToken(getUser)
   },[])
  
  return (
  <userContext.Provider value={{user,setUser}}>
    <Router>
    <Routes>
      {/* Protecting Route  */}
      {user || userToken?<Route path='/'  element = {<Home/>}/>:<Route path='/'  element = {<SignUp/>}/>}
      <Route path='/signup'  element = {<SignUp/>}/>
      <Route path='*'  element = {<Page404/>}/>
    </Routes>
  </Router>
  </userContext.Provider>
  )
}
