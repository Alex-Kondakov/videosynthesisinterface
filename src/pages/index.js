import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from '../components/Layout'

import Dashboard from './dashboard'
import Scripts from './scripts'
import Logs from './logs'

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/scripts" element={<Scripts />} />
                    <Route exact path="/logs" element={<Logs />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default Pages