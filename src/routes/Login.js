import React, { useState, useContext } from "react"
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"

export default function Login() {
    const { email, claims, login } = useContext(AuthContext)
    const [emailInput, setEmailInput] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const navigate = useNavigate()
    const [params] = useSearchParams()

    if (!!email) {
        return <Navigate to="/Account" />
    }

    const clickHandler = () => {
        const url = params.get('returnUrl') ?? "/"

        login(emailInput, password)
        .then(() => {console.log("Login redirect", url); navigate(url)})
        .catch(e => {
          const msg = e.statusCode === 401 
          ? "This email address and password combination doesn't exist. Please try again."
          : e.message + " (Error " + e.statusCode + ")"
          setErrorMsg(msg)
        })
    }

    return (
        <Task task="Login" className="white-on-blue">
            <TaskStep>
                <div className="login">
                    {errorMsg && <div className="errorMessage">{errorMsg}</div>}
                    <label>Email:</label>
                    <input value={emailInput} onChange={e => setEmailInput(e.target.value)} />
                    <label>Password:</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={clickHandler}>Login</button>
                    <a href={"https://my.caseparts.com/Account/Register/?returnURL=" + window.location.href}>
                        Register
                    </a>
                </div>
            </TaskStep>
        </Task>
    )
}