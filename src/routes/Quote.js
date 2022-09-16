import React, { useState, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"
import CustomerInfo from "../components/CustomerInfo"
import ShippingInfo from "../components/ShippingInfo"
import Checkbox from "../components/Checkbox"

export default function Quote() {
    const { cart, clearCart } = useContext(AppContext)
    const [step, setStep] = useState("submit")
    const [showAddress, setShowAddress] = useState(false)

    const submit = () => {
        clearCart()
        setStep("thanks")
    }

    if (step === "submit" && cart.length === 0) {
        return <Navigate to="/cart" />
    }

    return (
        <Task task="Quote" className="black-on-blue-gradient">
            {step === "submit" && <TaskStep step="submit">
                <h1>Request Quote</h1>
                <p>Please enter below your contact information and (optionally) the shipping address for your order.</p>
                <CustomerInfo />
                <br />
                <Checkbox label="Enter Shipping Address" checked={showAddress} setChecked={setShowAddress} />
                {showAddress && <ShippingInfo />}
                <div className="pad center">
                    <button onClick={submit}>Submit Quote Request</button>
                </div>
            </TaskStep>
            }
            {step === "thanks" && <TaskStep step="thanks">
                <h1>Thank you!</h1>
                <p>Your quote request has been submitted.  We are working on it and will send you an{" "}
                    <Link to="/info/orderlink">OrderLink&trade;</Link> to track your quote.</p>
                <div className="pad center">
                    <Link to="/"><button>Continue</button></Link>
                </div>
            </TaskStep>
            }
        </Task>
    )
}
