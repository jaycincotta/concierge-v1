import * as React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import AppState from "./context/AppState"
import AuthProvider from './context/AuthProvider'
import Layout from './layout/Main'
import Welcome from './routes/Welcome'
import HomePage from './routes/HomePage'
import GettingStarted from './routes/GettingStarted'
import Login from './routes/Login'
import Account from './routes/Account'
import MPK from './routes/branch/MPK'
import STL from './routes/branch/STL'
import SEA from './routes/branch/SEA'
import Search from './routes/Search'
import Part from './routes/Part'
import Cart from './routes/Cart'
import Gasket from './routes/custom/Gasket'
import OrderLink from './routes/info/OrderLink'
import CustomParts from './routes/custom/CustomParts'
import Purchase from './routes/Purchase'
import Quote from './routes/Quote'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
    return (

        <Router basename="concierge">
            <AuthProvider>
                <AppState>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="login" element={<Login />} />
                            <Route path="account" element={<Account />} />
                            <Route path="getting-started" element={<GettingStarted />} />
                            <Route path="welcome" element={<Welcome />} />
                            <Route path="branch/mpk" element={<MPK />} />
                            <Route path="branch/stl" element={<STL />} />
                            <Route path="branch/sea" element={<SEA />} />
                            <Route path="search/:query" element={<Search />} />
                            <Route path="part/:partId" element={<Part />} />
                            <Route path="cart" element={<Cart />} />
                            <Route path="custom" element={<CustomParts />} />
                            <Route path="custom/gasket" element={<Gasket />} />
                            <Route path="info/orderlink" element={<OrderLink />} />
                            <Route path="purchase" element={<Purchase />} />
                            <Route path="quote" element={<Quote />} />
                            <Route index element={<HomePage />} />
                            <Route path="*" element={<Navigate replace to="/" />} />
                        </Route>
                    </Routes>
                </AppState>
            </AuthProvider>
        </Router >

    )
}