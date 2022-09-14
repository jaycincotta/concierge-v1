import React from "react"
import { Navigate } from "react-router-dom"
import Task from "../../layout/Task"
import TaskStep from "../../layout/TaskStep"

export default function SEA() {

    return (
        <Task task="Seattle" hideCancel={true} className="white-on-blue">
            <TaskStep step="sea" next="mpk" previous="stl">
                <h1>Seattle</h1>
            </TaskStep>
            <TaskStep step="mpk">
                <Navigate to="/branch/mpk" />
            </TaskStep>
            <TaskStep step="stl">
                <Navigate to="/branch/stl" />
            </TaskStep>
        </Task>
    )
}