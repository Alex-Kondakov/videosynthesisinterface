import React, { useEffect } from 'react'
import PidBar from '../components/PidBar'

const Dashboard = () => {
    useEffect (() => {
        document.title = 'SDLR - dashboard'
    })
    return (
        <div>
            <PidBar />
        </div>
    )
}

export default Dashboard