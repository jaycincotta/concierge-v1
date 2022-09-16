import React, { useState, useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"

export default function Login() {
    const { user, login } = useContext(AppContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    if (!!user) {
        return <Navigate to="/Account" />
    }

    const clickHandler = () => {
        login({
            email: email,
            custId: password
        })
        navigate("/")
    }
    return (
        <Task task="Login" className="white-on-blue">
            <TaskStep step="Login">
                <div className="login">
                    <label>Email:</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                    <label>Password:</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={clickHandler}>Login</button>
                </div>
            </TaskStep>
        </Task>
    )
}