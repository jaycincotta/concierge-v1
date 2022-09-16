import React from "react"
import { Navigate } from "react-router-dom"
import Task from "../../layout/Task"
import TaskStep from "../../layout/TaskStep"

export default function STL() {

    return (
        <Task task="Locations" className="black-on-blue-gradient">
            <TaskStep step="stl" next="sea" previous="mpk">
                <div className="branch">
                    <div><span className="subtitle">Case Parts</span></div>
                    <h1>St Louis</h1>
                    <p>
                        3218 Rider Trail South<br />
                        Earth City, MO 63045
                    </p>
                    <p>
                        7:00am - 4:30pm CT&nbsp; &nbsp;(Monday - Friday)
                    </p>
                    <div className="phoneNumbers">
                        <div><b>Voice</b>:</div>
                        <div>(314) 739-9694</div>
                        <div>(800) 423-9337</div>
                        <div><b>Fax</b>:</div>
                        <div>(314) 739-9601</div>
                        <div>(800) 262-3974</div>
                    </div>
                    <div className="contactMethods">
                        <a href="tel:3147399694"><button>Call</button></a>
                        <a href="sms:3147399694"><button>Text</button></a>
                        <a href="https://www.google.com/maps/place/Case+Parts+Co+-+St.+Louis/@38.758068,-90.4523239,17z/data=!3m1!4b1!4m5!3m4!1s0x87df2e204a971e9f:0xb9f3600a4167e103!8m2!3d38.7581406!4d-90.4521993"><button>Map</button></a>
                    </div>
                    <h2>Will Call</h2>
                    <p>Please let us know when you plan to pick-up your order and we will have it waiting for you outside our front door.</p>

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
            <TaskStep step="sea">
                <Navigate to="/branch/sea" />
            </TaskStep>
            <TaskStep step="mpk">
                <Navigate to="/branch/mpk" />
            </TaskStep>
        </Task>
    )
}