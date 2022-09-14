import React from "react"
import { Link, Navigate } from "react-router-dom"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"
import useLocalStorage from "../cpc-shared/useLocalStorage"
import CustomItems from "../components/CustomItems"


const LearnMore = url => <Link className="learnMore" to={url}>Learn More</Link>

export default function HomePage() {
    const [seenWelcome] = useLocalStorage("seenWelcome", false)

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
                            You can search our catalog, configure custom parts, and/or describe parts below. Just let us know what you need and we'll send you an OrderLink&trade; <LearnMore url="/custom" />
                        </p>
                    </div>
                    <div className="section white-on-blue">
                        <div className="searchLabel">Search our extensive parts catalog:</div><input className="searchInput" placeholder="Enter part# or keywords"/>
                        <button className="searchButton">Search</button>
                    </div>
                    <div className="section">
                        <h2>Configure a Custom-Made Part</h2>
                        <p>
                            We are very experienced with fabricating commercial refrigeration parts
                            to your exact needs. <LearnMore url="/custom" />
                        </p>
                        <CustomItems />
                    </div>
                    <div className="researchForm section black-on-blue">
                        <h2>Parts Research</h2>
                        <p>Not sure what part you need? Let us help!</p>
                        <label>Part Description:</label>
                        <textarea placeholder="Describe the part to be replaced" rows={4}/>
                        <div className="assemblyNote">What unit/assembly contains this part?</div>
                        <label>Make:</label>
                        <input placeholder="Manufacturer of the unit/assembly"></input>
                        <label>Model:</label>
                        <input placeholder="Model of the unit/assembly"></input>
                        <label>Serial Number:</label>
                        <input placeholder="Serial Number of the unit/assembly"></input>
                        <button>Add to Quote</button>
                    </div>
                </>
            </TaskStep>
        </Task>
    )
}