import React from "react"
import { Navigate } from "react-router-dom"
import Task from "../../layout/Task"
import TaskStep from "../../layout/TaskStep"

export default function STL() {

    return (
        <Task task="St Louis" hideCancel={true} className="white-on-blue">
            <TaskStep step="stl" next="sea" previous="mpk">
                <h1>St Louis</h1>
            </TaskStep>
            <TaskStep step="sea">
                <Navigate to="/branch/sea" />
            </TaskStep>
            <TaskStep step="mpk">
                <Navigate to="/branch/mpk" />
            </TaskStep>
        </Task>
    )
}