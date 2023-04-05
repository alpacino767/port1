import React from 'react'
import { useAppContext } from "../context/appContext";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";




const initialState = {
  name: "",
  email: "",
  password: "",
  // isMember: false,


}

const Dashboard = () => {


  const navigate = useNavigate()
  const [values, setValues] = useState(initialState)
  const { user,showAlert, isLoading, displayAlert, registerUser, loginUser,logoutUser } = useAppContext()

  
  return (
  <div>
    <h1>Coming soon</h1>

    <button onClick={logoutUser} className='btn-2'><p className='f2'>Log out</p></button>
  </div>



  )
}

export default Dashboard