import React from "react"
import useLocalStorage from "../cpc-shared/useLocalStorage"

export default function ShippingInfo() {
    const [street, setStreet] = useLocalStorage("shipStreet", "")
    const [city, setCity] = useLocalStorage("shipCity", "")
    const [state, setState] = useLocalStorage("shipState", "")
    const [zipcode, setZipcode] = useLocalStorage("shipZipcode", "")

    return <div className="researchForm section black-on-blue">
        <h2>Shipping Address</h2>
        <label>Street:</label>
        <input placeholder="Enter street address" defaultValue={street}
            onChange={e => setStreet(e.target.value)} />
        <label>City:</label>
        <input placeholder="Enter city" defaultValue={city}
            onChange={e => setCity(e.target.value)} />
        <label>State:</label>
        <input placeholder="Enter state" defaultValue={state}
            onChange={e => setState(e.target.value)} />
        <label>Zipcode:</label>
        <input placeholder="Enter zipcode" defaultValue={zipcode}
            onChange={e => setZipcode(e.target.value)} />
    </div>
}
