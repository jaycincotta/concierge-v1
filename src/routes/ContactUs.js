import React from "react"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"
import ContactInfo from "../components/ContactInfo"

export default function ContactUs() {

    return (
        <Task task="Contact Us" className="white-on-blue">
            <TaskStep step="Warehouses">
                <ContactInfo />
            </TaskStep>
        </Task>
    )
}