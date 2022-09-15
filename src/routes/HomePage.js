import React, { useState, useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Link, Navigate, useNavigate } from "react-router-dom"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"
import useLocalStorage from "../cpc-shared/useLocalStorage"
import CustomItems from "../components/CustomItems"

const LearnMore = url => <Link className="learnMore" to={url}>Learn More</Link>

const ResearchForm = () => {
    const { addItem } = useContext(AppContext)
    const [descr, setDescr] = useState("")
    const [mfg, setMfg] = useState("")
    const [model, setModel] = useState("")
    const [sn, setSn] = useState("")
    const navigate = useNavigate()

    function addRequest() {
        addItem({
            itemType: "spo",
            partId: "Part Research",
            description: descr,
            details: {
                Make: mfg,
                Model: model,
                "S/N": sn
            }
        })
        navigate("/cart")
    }

    return <div className="researchForm section black-on-blue">
        <h2>Part Research</h2>
        <p>Not sure what part you need? Let us help!</p>
        <label>Part Description:</label>
        <textarea placeholder="Describe the part to be replaced" rows={4}
            onChange={e => setDescr(e.target.value)} />
        <div className="assemblyNote">What unit/assembly contains this part?</div>
        <label>Make:</label>
        <input placeholder="Manufacturer of the unit/assembly"
            onChange={e => setMfg(e.target.value)} />
        <label>Model:</label>
        <input placeholder="Model of the unit/assembly"
            onChange={e => setModel(e.target.value)} />
        <label>Serial Number:</label>
        <input placeholder="Serial Number of the unit/assembly"
            onChange={e => setSn(e.target.value)} />
        <button onClick={addRequest}>Add to Quote</button>
    </div>
}

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
                        <div className="searchLabel">Search our extensive parts catalog:</div>
                        <div className="searchBox">
                            <input className="searchInput" placeholder="Enter part# or keywords" />
                            <Link to="/part/171"><button className="searchButton">Search</button></Link>
                        </div>
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