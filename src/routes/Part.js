import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useParams, useNavigate } from "react-router-dom"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"
import searchResults from "../data/searchResults"

export default function Part() {
    const {partId} = useParams();
    const part = searchResults(partId)
    const { addItem } = useContext(AppContext)
    const navigate = useNavigate()

    const addPart = () => {
        addItem(part)
        navigate("/cart")
    }

    return (
        <Task task="Part" className="black-on-blue">
            <TaskStep step="1">
                <div className="part">
                    <h1>{part.description}</h1>
                    <h2><label>Part #:</label>{part.partId}</h2>
                    <div className="price">${part.price}</div>
                    <button onClick={addPart}>Add to Cart</button>
                </div>
            </TaskStep>
        </Task>
    )
}