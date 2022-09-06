import * as React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import AppState from "./context/AppState";
import Layout from './layout/Main'
import HomePage from './routes/HomePage'
import GettingStarted from './routes/GettingStarted';
import RequestQuote from './routes/RequestQuote';
import ContactUs from './routes/ContactUs';
import Test from './routes/Test';
import Login from './routes/Login';
import Account from './routes/Account';

export default function App() {
    return (
        <AppState>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="login" element={<Login />} />
                        <Route path="account" element={<Account />} />
                        <Route path="getting-started" element={<GettingStarted />} />
                        <Route path="quote" element={<RequestQuote />} />
                        <Route path="contact" element={<ContactUs />} />
                        <Route path="test" element={<Test />} />
                        <Route index element={<HomePage />} />
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Route>

                </Routes>
            </Router >
        </AppState>
    )
}