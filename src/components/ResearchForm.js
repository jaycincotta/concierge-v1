import React, { useState, useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

export default function ResearchForm() {
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
        <div className="page-width">
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
    </div>
}
