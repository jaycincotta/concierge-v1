import React from "react"
import GasketForm from "../components/GasketForm"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"

export default function Gasket() {

    return (
        <Task task="Gasket" className="white-on-blue">
            <TaskStep step="1">
                <h1>Custom Molded Gasket</h1>
                <GasketForm />
            </TaskStep>
        </Task>
    )
}