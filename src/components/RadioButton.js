import React from "react"

export default function RadioButton({ label, name, value, setter }) {
    return (
        <div className="radioButton">
            <input type="radio" name={name} value={value}
                onClick={() => setter(name) }
                checked={value === name} />
            <div>{label}</div>
        </div>
    )
}