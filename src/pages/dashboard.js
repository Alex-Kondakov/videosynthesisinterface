import React, { useEffect } from 'react'
import PidBar from '../components/PidBar'

const Dashboard = () => {
    useEffect (() => {
        document.title = 'Video Synthesis Application - dashboard'
    })
    return (
        <div>
            <PidBar />
        </div>
    )
}

export default Dashboard