import React from "react";

const checkbox = (checked) => checked
    ? <i className="fa-solid fa-square-check" />
    : <i className="fa-thin fa-square" />

export default function Checkbox({ label, checked, setChecked }) {
    return (
        <div className="selectable" onClick={() => setChecked(!checked)}>
            <span className="checkbox">
                {checkbox(checked)}
            </span>
            <span>{label}</span>
        </div>
    )
}