import React, { useState } from "react"
import TaskStep from "./TaskStep"

// This represents the set of steps associated with a task
export default function Task({ title, steps }) {
    // steps is an array of obejcts, each with these properties:
    //   video: URL of the video <-- REQUIRED
    //   jsx: function that returns the controls for this step
    //   name: optional display name of the step for console messages
    //   id: optional string identifier for a step, used with next/previous properties
    //   next/prev: polymorphic specification for next/previous step
    //     - number matching the array index of a step
    //     - string matching the id of a step
    //     - function returning a number or string like above
    //     - if undefined, next/prev step through the step array sequentially
    //     - any other value retults in next/prev being disabled

    const [index, setIndex] = useState(0)
    const step = steps[index]

    // If index is within array bounds, return a function to setIndex, otherwise null
    const validateIndex = (i) => i >= 0 && i <= steps.length - 1 ? () => setIndex(i) : null

    // Determine the the index of the next step based on the current step
    const nextIndex = (function () {
        switch (typeof step.next) {
            case 'undefined':
                return validateIndex(index + 1)
            case 'number':
                return validateIndex(Math.trunc(step.next))
            case 'string':
                return validateIndex(steps.findIndex((x) => x.id == step.next))
            case 'function':
                return validateIndex(step.next())
            default:
                return null
        }
    })()
    const previousIndex = (function () {
        switch (typeof step.previous) {
            case 'undefined':
                return validateIndex(index - 1)
            case 'number':
                return validateIndex(Math.trunc(step.previous))
            case 'string':
                return validateIndex(steps.findIndex((x) => x.id == step.previous))
            case 'function':
                return validateIndex(step.previous())
        }
    })()

    console.log(title, index, step.name)
    return (
        <TaskStep
            title={title}
            videoUrl={step.video}
            clickNext={nextIndex}
            clickPrevious={previousIndex}
        >
            {!!step.jsx && step.jsx()}
        </TaskStep>
    )
}