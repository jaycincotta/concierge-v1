import React, { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { AuthContext } from "../context/AuthContext"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"

export default function Account() {
    const { email, logout, claims } = useContext(AuthContext)
    const navigate = useNavigate()

    if (!email) {
        return <Navigate to={"/Login?returnUrl=/Account"}/>
    }

    const handleLogout = () => {
        logout()
        navigate("/")
    }
    return (
        <Task task="Account" className="white-on-blue">
            <TaskStep>
                <div className="login">
                    <label>Email</label><span>{email}</span>
                    <label>Password</label><span>{claims.Customer.CustId}</span>
                    <button onClick={handleLogout}>Sign Out</button>
                </div>
            </TaskStep>
        </Task>
    )
}