import React, { useState, useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

export default function GasketForm() {
    const { addItem } = useContext(AppContext)
    const [material, setMaterial] = useState("")
    const [sides, setSides] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")
    const navigate = useNavigate()

    function addRequest() {
        addItem({
            itemType: "gasket",
            partId: "Gasket",
            description: `${sides}-Sided ${width} x ${height}`,
            details: {
                Material: material,
                Sides: sides,
                Width: width,
                Height: height
            }
        })
        navigate("/cart")
    }

    return <div className="researchForm section black-on-blue">
        <h2>Specifications</h2>
        <p><i>This is a simplified data entry form just for early demos.</i></p>
        <label>Material:</label>
        <input placeholder="Enter part# for the material/profile"
            onChange={e => setMaterial(e.target.value)} />
        <label>Sides:</label>
        <input placeholder='Enter "3" or "4"'
            onChange={e => setSides(e.target.value)} />
        <label>Width:</label>
        <input placeholder='Enter width in inches'
            onChange={e => setWidth(e.target.value)} />
        <label>Sides:</label>
        <input placeholder='Enter height in inches'
            onChange={e => setHeight(e.target.value)} />
        <button onClick={addRequest}>Add to Quote</button>
    </div>
}
