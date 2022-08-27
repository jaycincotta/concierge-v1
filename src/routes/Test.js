import React from "react"
import Task from "../layout/Task"
import useVideo from "../data/useVideo"

export default function Test() {
    // const videos = [
    //     "https://vimeo.com/741705223/5ca0983480", // 0: Jay Tutorial 1
    //     "https://vimeo.com/741706003/e3d8e3e09e", // 1: Jay Tutorial 2
    //     "https://vimeo.com/741707007/4f8ad9f04e", // 2: Jay Tutorial 3 Authenticated
    //     "https://vimeo.com/741707199/4a0bc9ed43", // 3: Jay Tutorial 3 Anonymous
    //     "https://vimeo.com/741709927/50f90a416e", // 4: Jay Tutorial 4
    //     "https://vimeo.com/741710210/c85fceae30"  // 5: Jay Home 1
    //   ]

    const {find, pick /*, missing */} = useVideo("Getting Started")
    const steps = [
        {
            name: "Jay Tutorial 1",
            video: find("1"),
            jsx: () => <div>Jay Tutorial 1</div>
        },
        {
            name: "Jay Tutorial 2",
            video: find("2"),
            jsx: () => <div>Jay Tutorial 2</div>
        },
        {
            name: "Jay Tutorial 3 Anonymous",
            video: pick("3"),
            jsx: () => <div>Jay Tutorial 3 Anonymous or Authenticated</div>
        },
        {
            name: "Jay Tutorial 4",
            video: find("4"),
            jsx: () => <div>4: Jay Tutorial 4</div>
        }
    ]

    console.log("pick 1", pick("3"))
    console.log("pick 2", pick("3"))
    console.log("pick 3", pick("3"))
    console.log("pick 4", pick("3"))
    return (
        <Task title="Test" steps={steps} />
    )
}