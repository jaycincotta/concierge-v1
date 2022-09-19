import React from "react"

export default function RadioButton({ label, name, value, setter }) {
    return (
        <div className="radioButton" onClick={() => setter(name)}>
            <input type="radio" name={name} value={value}
                checked={value === name}
                // We need an onCHange handler to avoid a runtime warning, but
                // we don't need to do anything at this level because the 
                // parent div will handle it.
                onChange={(e) => { return null }}
            />
            <div>{label}</div>
        </div>
    )
}