import React from "react"
import Task from "../layout/Task"
import ContactInfo from "../components/ContactInfo"
import pick from "../functions/pick"

export default function ContactUs() {
    const videos = [
        "https://vimeo.com/741709927/50f90a416e"
    ]

    const steps = [
        {
            video: pick(videos),
            jsx: () => <ContactInfo />
        }
    ]

    return (
        <Task title="Contact Us" steps={steps} />
    )
}