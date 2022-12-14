import React, {useContext} from "react"
import { AppContext } from "../../context/AppContext"
import { Navigate } from "react-router-dom"
import Task from "../../layout/Task"
import TaskStep from "../../layout/TaskStep"
import Checkbox from "../../components/Checkbox"

export default function MPK() {
    const { branch, setBranch } = useContext(AppContext)

    return (
        <Task task="Locations" className="black-on-blue-gradient">
            <TaskStep step="mpk" next="stl" previous="sea">
                <div className="branch">
                    <div><span className="subtitle">Case Parts</span></div>
                    <h1>Los Angeles (MPK)</h1>
                    <Checkbox
                        label="This is my preferred branch"
                        checked={branch === "MPK"}
                        setChecked={flag => setBranch(flag ? "MPK" : "")}
                    />
                    <p>
                        877 Monterey Pass Road<br />
                        Monterey Park, CA 91754
                    </p>
                    <p>
                        7:30am - 5:00pm PT&nbsp; &nbsp;(Monday - Friday)
                    </p>
                    <div className="phoneNumbers">
                        <div><b>Voice</b>:</div>
                        <div>(323) 729-6000</div>
                        <div>(800) 421-0271</div>
                        <div><b>Fax</b>:</div>
                        <div>(323) 263-1210</div>
                        <div>(800) 972-2441</div>
                    </div>
                    <div className="contactMethods">
                        <a href="tel:3237296000"><button>Call</button></a>
                        <a href="sms:3237296000"><button>Text</button></a>
                        <a href="https://www.google.com/maps/place/Case+Parts+Co/@34.0686345,-118.1897396,14z/data=!4m5!3m4!1s0x80c2c57f15f64feb:0xa9fbf65ed75bcd4!8m2!3d34.0520021!4d-118.1572515"><button>Map</button></a>
                    </div>
                    <h2>Will Call</h2>
                    <p>Pick-up your order at our Will Call Counter.</p>

                    <h2>Email</h2>
                    <p className="center"><b>
                        <a href="mailto:customerservice@caseparts.com" alt="">
                            customerservice@caseparts.com
                        </a>
                    </b></p>
                    <p className="center pad">
                        <b><a href="mailto:accounting@caseparts.com" alt="">
                            accounting@caseparts.com
                        </a></b>
                    </p>
                </div>
            </TaskStep>
            <TaskStep step="stl">
                <Navigate to="/branch/stl" />
            </TaskStep>
            <TaskStep step="sea">
                <Navigate to="/branch/sea" />
            </TaskStep>
        </Task>
    )
}