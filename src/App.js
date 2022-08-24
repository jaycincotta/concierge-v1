import * as React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from './layout/Main'
import HomePage from './routes/HomePage'
import GettingStarted from './routes/GettingStarted';
import ContactInfo from './components/ContactInfo'

const Empty = () => <div>Nothing to see here!</div>
const NotFound = () => <div>Nothing to see here!</div>

export default function App() {
    console.log("Render App")
    return (
        <Router>
            <Routes>
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