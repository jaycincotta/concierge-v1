import React from "react"
import Task from "../../layout/Task"
import TaskStep from "../../layout/TaskStep"

export default function OrderLink() {
    return (
        <Task task="What's OrderLink?" className="white-on-blue">
            <TaskStep step="demo" className="black-on-blue-gradient">
                <h1>OrderLink</h1>
                <div className="subtitle">Dynamic Quotes</div>
                <p>
                    OrderLink is a phone-friendly web application for reviewing and approving Case Parts quotes.
                    Many of our customers call us to request changes to their quotes and with OrderLink,
                    Any changes auto-magically update on your phone even as you are speaking with any of our 
                    customer service parts experts.
                </p>
                <p>
                    Of course, we can still send quotes as PDF files, but many of our customers find OrderLink to be
                    faster and more convenient &mdash; especially when you are out on the road away from your desk.
                </p>
            </TaskStep>
        </Task>
    )
}