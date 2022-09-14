import React from "react"
import { Navigate } from "react-router-dom"
import Task from "../../layout/Task"
import TaskStep from "../../layout/TaskStep"

export default function SEA() {

    return (
        <Task task="Seattle" hideCancel={true} className="white-on-blue">
            <TaskStep step="sea" next="mpk" previous="stl">
            <div className="branch">
                    <div><span className="subtitle">Case Parts</span></div>
                    <h1>Seattle</h1>
                    <p>
                        25315 74th Ave South, Suite 101<br />
                        Kent, WA 98032
                    </p>
                    <p>
                        7:30am - 5:00pm PT&nbsp; &nbsp;(Monday - Friday)
                    </p>
                    <div className="phoneNumbers">
                        <div><b>Voice</b>:</div>
                        <div>(253) 854-4900</div>
                        <div>(800) 715-3416</div>
                        <div><b>Fax</b>:</div>
                        <div>(253) 854-4931</div>
                        <div>(800) 714-1257</div>
                    </div>
                    <div className="contactMethods">
                        <a href="tel:2538544900"><button>Call</button></a>
                        <a href="sms:2538544900"><button>Text</button></a>
                        <a href="https://www.google.com/maps/place/Case+Parts+Co+-+Seattle/@47.3745306,-122.2431806,17z/data=!3m1!4b1!4m5!3m4!1s0x5490595960b5a7cb:0x796a82983672228!8m2!3d47.3746396!4d-122.2431791"><button>Map</button></a>
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
            <TaskStep step="mpk">
                <Navigate to="/branch/mpk" />
            </TaskStep>
            <TaskStep step="stl">
                <Navigate to="/branch/stl" />
            </TaskStep>
        </Task>
    )
}