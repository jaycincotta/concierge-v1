import { Children, cloneElement, useState } from "react"
import useVideo from "../data/useVideo"

/************************************************************************************
 * A Task consists of a one or more steps to be processed in order.
 * Each step has a name and optionally, references to the next/prev steps in the task
 * The referencces to next/prev can be any of the following:
 *   - number matching the array index of a step
 *   - string matching a stepName
 *   - if undefined, next/prev step through the step array sequentially
 *   - any other value results in next/prev being disabled
 ************************************************************************************/


function findIndex(step, steps) {
    switch (typeof step) {
        case 'undefined':
            return 0
        case 'number':
            return step
        case 'string':
            return steps.findIndex((x) => x.props.step === step)
        default:
            return null
    }
}

export default function Task({ task, hideCancel, firstStep, className, children }) {
    const steps = Children.toArray(children);
    const validateIndex = (i) => i >= 0 && i <= steps.length - 1 ? () => setIndex(i) : null
    const [index, setIndex] = useState(firstStep ? findIndex(firstStep, steps) : 0)
    const step = steps[index].props
    const { pick } = useVideo(task)
    const videoUrl = pick(step.step)

    // Determine the the index of the next step based on the current step
    const nextIndex = (function () {
        console.log("next", index, step)
        switch (typeof step.next) {
            case 'undefined':
                return validateIndex(index + 1)
            case 'number':
                return validateIndex(Math.trunc(step.next))
            case 'string':
                return validateIndex(steps.findIndex((x) => x.props.step === step.next))
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
                return validateIndex(steps.findIndex((x) => x.props.step === step.previous))
            default:
                return null
        }
    })()

    return (
        <main className={className}>
            {
                Children.map(steps, (child, i) => index === i
                    ? cloneElement(child, {
                        taskName: task,
                        hideCancel: hideCancel,
                        videoUrl: videoUrl,
                        clickNext: nextIndex,
                        clickPrevious: previousIndex,
                        ...child.props
                    })
                    : ""
                )
            }
        </main>
    )
}