import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Layout from '../components/Layout'

import Dashboard from './dashboard'
import Tasks from './tasks'
import Logs from './logs'
import Remote from './remote'

const Pages = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Dashboard />} />
                    <Route exact path="/tasks" element={<Tasks />} />
                    <Route exact path="/logs" element={<Logs />} />
                    <Route exact path="/remote" element={<Remote />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default Pages