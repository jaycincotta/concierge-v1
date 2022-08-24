import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './layout/Main'
import Home from "./Home"
import Test from './routes/Test'
import ContactInfo from './components/ContactInfo'
import HomePage from './routes/HomePage'
import GettingStarted from './routes/GettingStarted';

const Empty = () => <div>Nothing to see here!</div>
const NotFound = () => <div>Nothing to see here!</div>

export default function App() {
    console.log("Render App")
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Layout />}>
                    <Route index element={<HomePage />} />
                </Route>

                <Route path="/test" element={<Layout />}>
                    <Route index element={<Test />} />
                </Route>

                <Route path="/" element={<Layout />}>
                    <Route path="getting-started" element={<GettingStarted />} />
                    <Route path="contact" element={<ContactInfo />} />
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

            </Routes>
        </Router >
    )
}