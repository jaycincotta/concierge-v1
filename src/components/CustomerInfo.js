import React from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export default function CustomerInfo() {
    const [name, setName] = useLocalStorage("custName", "")
    const [email, setEmail] = useLocalStorage("custEmail", "")
    const [phone, setPhone] = useLocalStorage("custPhone", "")


    return <div className="researchForm section black-on-blue">
        <h2>Customer Information</h2>
        <label>Name:</label>
        <input placeholder="Enter your first and last name" defaultValue={name}
            onChange={e => setName(e.target.value)} />
        <label>Email:</label>
        <input placeholder="Enter your email address" defaultValue={email}
            onChange={e => setEmail(e.target.value)} />
        <label>Phone:</label>
        <input placeholder="Enter your phone number" defaultValue={phone}
            onChange={e => setPhone(e.target.value)} />
    </div>
}
