import React from "react"
import { Navigate } from "react-router-dom"
import Task from "../../layout/Task"
import TaskStep from "../../layout/TaskStep"

export default function MPK() {

    return (
        <Task task="Los Angeles" hideCancel={true} className="white-on-blue">
            <TaskStep step="mpk" next="stl" previous="sea">
                <div className="branch">
                    <div><span className="subtitle">Case Parts</span></div>
                    <h1>Los Angeles</h1>
                    <p>
                        877 Monterey Pass Road<br />
                        Monterey Park, CA 91754
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

                    <h2>Email</h2>
                    <p className="center"><b>
                        <a href="mailto:customerservice@caseparts.com" alt="">
                            customerservice@caseparts.com
                        </a>
                    </b></p>
                    <p className="center"><b>
                        <a href="mailto:accounting@caseparts.com" alt="">
                            accounting@caseparts.com
                        </a>
                    </b><br/>&nbsp;</p>
                    <h2>Will Call</h2>
                    <p>Pick-up your order at our Will Call Counter.</p>
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