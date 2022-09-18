import React from "react"
import GasketForm from "../../components/GasketForm"
import Task from "../../layout/Task"
import TaskStep from "../../layout/TaskStep"

export default function Gasket() {

    return (
        <Task task="Custom-Molded Gasket" className="white-on-blue">
            <TaskStep>
                <h1>Custom Molded Gasket</h1>
                <GasketForm />
            </TaskStep>
        </Task>
    )
}