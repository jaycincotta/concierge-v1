import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Link } from "react-router-dom"
import Task from "../layout/Task"
import TaskStep from "../layout/TaskStep"
import RadioButton from "../components/RadioButton"

export default function GettingStarted() {
    const { user, userLevel, setUserLevel, branch, setBranch } = useContext(AppContext)

    return (
        <Task task="Getting Started" className="black-on-blue-gradient">
            <TaskStep step="1">
                <h1>Welcome!</h1>
                <p>
                    This app is optimized for your phone to make it fast and easy to request quotes from Case Parts for commercial refrigeration parts.
                </p>
                <p>
                    Click Play for step-by-step instructions on using this app.
                </p>

            </TaskStep>
            <TaskStep step="2">
                <h1>Good Job!</h1>
                <p>You're getting the hang of using the player control buttons. This is important because
                    context-sensitive video help is always available in Case Parts Concierge</p>
            </TaskStep>
            <TaskStep step="3">
                {user &&
                    <div>
                        <h1>Good to see you, {user.email}!</h1>
                        <p>You're logged into your Case Parts account: {user.custId}</p>
                    </div>
                }
                {!user &&
                    <div>
                        <h1>Which best describes you?</h1>
                        <div className="radioList">
                            <RadioButton name="newbie" value={userLevel} setter={setUserLevel}
                                label="I'm new to Case Parts" />
                            <RadioButton name="newish" value={userLevel} setter={setUserLevel}
                                label="I'm familiar with Case Parts but have never placed an order" />
                            <RadioButton name="unreg" value={userLevel} setter={setUserLevel}
                                label="I've bought from Case Parts before, but I'm not registered on the website" />
                            <RadioButton name="nreg cust" value={userLevel} setter={setUserLevel}
                                label="I have a CustomerID, but I'm not registered on the website" />
                            <RadioButton name="reg" value={userLevel} setter={setUserLevel}
                                label="I'm registered with caseparts.com, but don't have a CustomerID" />
                            <RadioButton name="reg cust" value={userLevel} setter={setUserLevel}
                                label="I have a CustomerID and am registered on caseparts.com" />
                            <RadioButton name="anonymous" value={userLevel} setter={setUserLevel}
                                label="I'd rather not answer this question" />
                        </div>
                    </div>
                }
            </TaskStep>
            <TaskStep step="4">
                <h1>Which of our branches is closest to you?</h1>
                <div className="radioList">
                    <RadioButton name="MPK" value={branch} setter={setBranch}
                        label={<p>
                            <b>Case Parts Los Angeles</b><br />
                            877 Monterey Park Rd, Monterey Park, CA 91754
                        </p>}
                    />
                    <RadioButton name="STL" value={branch} setter={setBranch}
                        label={<p>
                            <b>Case Parts St Louis</b><br />
                            3218 Rider Trail South, Earth City, MO 63045
                        </p>}
                    />
                    <RadioButton name="SEA" value={branch} setter={setBranch}
                        label={<p>
                            <b>Case Parts Seattle</b><br />
                            25315 74th Ave South, Suite 101, Kent, WA 98032
                        </p>}
                    />
                </div>
                <div className="pad center">
                    <Link to="/"><button>Complete Tutorial</button></Link>
                </div>
            </TaskStep>
        </Task>
    )
}