import React from "react"
import { useNavigate } from "react-router-dom";
import TaskPlus from "../layout/Task"

export default function Test() {
    const navigate = useNavigate()

    const videos = [
        "https://vimeo.com/741705223/5ca0983480", // 0: Jay Tutorial 1
        "https://vimeo.com/741706003/e3d8e3e09e", // 1: Jay Tutorial 2
        "https://vimeo.com/741707007/4f8ad9f04e", // 2: Jay Tutorial 3 Authenticated
        "https://vimeo.com/741707199/4a0bc9ed43", // 3: Jay Tutorial 3 Anonymous
        "https://vimeo.com/741709927/50f90a416e", // 4: Jay Tutorial 4
        "https://vimeo.com/741710210/c85fceae30"  // 5: Jay Home 1
      ]


    const steps = [
        {
            name: "Jay Tutorial 1",
            video: videos[0],
            jsx: () => <div>Jay Tutorial 1</div>
        },
        {
            name: "Jay Tutorial 2",
            video: videos[1],
            jsx: () => <div>Jay Tutorial 2</div>
        },
        {
            name: "Jay Tutorial 3 Anonymous",
            video: videos[3],
            jsx: () => <div>Jay Tutorial 3 Anonymous</div>
        },
        {
            name: "// 4: Jay Tutorial 4",
            video: videos[4],
            jsx: () => <div>4: Jay Tutorial 4</div>
        }
    ]

    return (
        <TaskPlus title="Test" steps={steps} />
    )
}