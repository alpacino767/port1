import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Routes, useParams} from 'react-router-dom'
import Landing from './Pages/Landing';
import {Dashboard, SignIn, SignUp, Error,
  ProtectedRoute,Forgot,Reset
} from "./Pages"





function App() {

 
  return (
   
<div>

<Routes>
<Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>

<Route path='/' element={<Landing />}></Route> 
<Route path='/signin' element={<SignIn />}></Route>
  <Route  path='/signup' element={<SignUp />}></Route>
  <Route path='/dashboard' element={<Dashboard />}></Route>
  <Route path='/forgot' element={<Forgot />}></Route>
  <Route path='/reset-password/:id/:token' element={<Reset />}></Route>
<Route path="*" element={<Error />} />
</Routes>

</div>

       
    
  );
}

export default App;
