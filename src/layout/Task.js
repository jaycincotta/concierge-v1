import React, { Children, cloneElement, useState } from "react"
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

export default function Task({ task, hideCancel, className, children, firstStep, step, setStep }) {
    const steps = Children.toArray(children);
    const [_index, _setIndex] = useState(step ? findIndex(step, steps) : firstStep ? findIndex(firstStep, steps) : 0)
    const index = step ? findIndex(step, steps) : _index;

    const setIndex = newIndex => {
        if (setStep) {
            setTimeout(()=>setStep(steps[newIndex].props.step),100)
        } else {
            _setIndex(newIndex)
        }
    }
    if (step && step !== steps[index].props.step) {
        console.log("SYNC FROM", steps[index].props.step, "TO", step)
        setIndex(findIndex(step, steps))
    }
    const currentStep = steps[index].props
    const { pick } = useVideo(task)
    const videoUrl = pick(currentStep.step)

    const validateIndex = (i) => i >= 0 && i <= steps.length - 1 ? () => setIndex(i) : null


    // Determine the the index of the next step based on the current step
    const nextIndex = (function () {
        switch (typeof currentStep.next) {
            case 'undefined':
                return validateIndex(index + 1)
            case 'number':
                return validateIndex(Math.trunc(currentStep.next))
            case 'string':
                return validateIndex(steps.findIndex((x) => x.props.step === currentStep.next))
            default:
                return null
        }
    })()

    const previousIndex = (function () {
        switch (typeof currentStep.previous) {
            case 'undefined':
                return validateIndex(index - 1)
            case 'number':
                return validateIndex(Math.trunc(currentStep.previous))
            case 'string':
                return validateIndex(steps.findIndex((x) => x.props.step === currentStep.previous))
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