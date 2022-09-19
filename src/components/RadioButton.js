import React from "react"

export default function RadioButton({ label, name, value, setter }) {
    return (
        <div className="radioButton" onClick={() => setter(name) }>
            <input type="radio" name={name} value={value}
                checked={value === name} />
            <div>{label}</div>
        </div>
    )
}