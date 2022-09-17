import React, { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"

export default function Account() {
    const { user, logout } = useContext(AppContext)
    const navigate = useNavigate()

    if (!user) {
        return <Navigate to="/Login" />
    }

    const signOut = () => {
        logout()
        navigate("/")
    }

    return (
        <Task task="Account" className="white-on-blue">
            <TaskStep>
                <div className="login">
                    <label>Email</label><span>{user.email}</span>
                    <label>Password</label><span>{user.custId}</span>
                    <button onClick={signOut}>Sign Out</button>
                </div>
            </TaskStep>
        </Task>
    )
}