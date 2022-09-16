import React, { useState } from "react"
import ResearchForm from "../components/ResearchForm"
import { Link, Navigate, useNavigate } from "react-router-dom"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"
import useLocalStorage from "../cpc-shared/useLocalStorage"
import CustomItems from "../components/CustomItems"

const LearnMore = url => <Link className="learnMore" to={url}>Learn More</Link>

export default function HomePage() {
    const [seenWelcome] = useLocalStorage("seenWelcome", false)
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    if (!seenWelcome) {
        return <Navigate to="/welcome" />
    }

    return (
        <Task task="">
            <TaskStep step="1">
                <>
                    <div className="section black-on-blue-gradient">
                        <h1>Case Parts Company</h1>
                        <div className="subtitle">The Commercial Refrigeration Parts Experts</div>
                        <p>
                            You can search our catalog, configure custom parts, and/or describe parts below. Just let us know what you need and we'll send you an OrderLink&trade; 
                            <LearnMore url="/info/OrderLink" />
                        </p>
                    </div>
                    <div className="section white-on-blue">
                        <div className="searchLabel">Search our extensive parts catalog:</div>
                        <form className="searchBox" onSubmit={() => navigate("/search/" + query)}>
                            <input className="searchInput" placeholder="Enter part# or keywords"
                                onChange={e => setQuery(e.target.value) } />
                            <button className="searchButton" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="section">
                        <h2>Configure a Custom-Made Part</h2>
                        <p>
                            We are very experienced with fabricating commercial refrigeration parts
                            to your exact needs. <LearnMore url="/custom" />
                        </p>
                        <CustomItems />
                    </div>
                    <ResearchForm />
                </>
            </TaskStep>
        </Task>
    )
}