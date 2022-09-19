import React, { useState, useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"
import CustomerInfo from "../components/CustomerInfo"
import ShippingInfo from "../components/ShippingInfo"

export default function Purchase() {
    const { cart, clearCart } = useContext(AppContext)
    const [step, setStep] = useState("submit")

    const submit = () => {
        clearCart()
        setStep("thanks")
    }

    if (step === "submit" && cart.length === 0) {
        return <Navigate to="/cart" />
    }

    return (
        <Task task="Purchase" className="black-on-blue-gradient" hideCancel={step === "thanks"}>
            {step === "submit" && <TaskStep step="submit">
                <h1>Checkout</h1>
                <p>Please enter below your contact information and the shipping address for your order.</p>
                <CustomerInfo />
                <br />
                <ShippingInfo />
                <div className="pad center">
                    <button onClick={submit}>Submit Order</button>
                </div>
            </TaskStep>
            }
            {step === "thanks" && <TaskStep step="thanks">
                <div className="pad">
                    <h1>Thank you!</h1>
                    <p>Your order has been submitted and is being reviewed. You will be sent an{" "}
                        <Link to="/info/orderlink">OrderLink&trade;</Link> to track your order and to provide payment information if you are purchasing by credit card.</p>
                    <div className="pad center">
                        <Link to="/"><button>Continue</button></Link>
                    </div>
                </div>
            </TaskStep>
            }
        </Task>
    )
}
