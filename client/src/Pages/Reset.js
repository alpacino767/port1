import React from 'react'
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useAppContext } from "../context/appContext";
import { useParams } from 'react-router-dom';



const eye = <FontAwesomeIcon icon={faEye} />;





const Reset = () => {
    const [show, setShow] = useState(false)
    const [details, setDetails] = useState({
        id: "",
        token: "",
        newPassword: "",
    })


    let { id, token } = useParams()
    ("see the id", id);


    const handleChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value, id: id, token: token})
    }

    // const [values, setValues] = useState(initialState)

    const handleShow = () => {
        setShow(!show)
    }
    const { user, showAlert, isLoading, displayAlert, registerUser, loginUser, passwordAlert, forgotpassword, resetPassword } = useAppContext()


    const onSubmit = (e) => {
        e.preventDefault()
        (details);

        if(!details.newPassword) {
          passwordAlert()
          return
        } else {
        resetPassword(details)
        }
    }


    return (
        <div className="search-3">
            <h4 className="down"> Reset Password</h4>
            <h5>new password</h5>
            <form>
                <label>
                    <input className="in" type={show ? "text" : "password"} 
                    onChange={handleChange}
                    name="newPassword"
                    placeholder="At least 6 characters" />
                    <i onClick={handleShow} className="eye">{eye}</i>


                    <button type="submit"
                        onClick={onSubmit} style={{ cursor: "pointer" }} className="btn-5">submit</button>

                </label>

            </form>

        </div>
    )
}

export default Reset