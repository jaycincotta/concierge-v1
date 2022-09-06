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

    const clickHandler = () => {
        logout()
        navigate("/")
    }
    return (
        <div className="white-on-blue">
            <Task task="Account">
                <TaskStep step="Sign Out">
                    <div className="login">
                        <label>Email</label><span>{user.email}</span>
                        <label>Password</label><span>{user.custId}</span>
                        <button onClick={clickHandler}>Sign Out</button>
                    </div>
                </TaskStep>
            </Task>
        </div>
    )
}