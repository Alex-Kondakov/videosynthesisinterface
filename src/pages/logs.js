import React, { useEffect } from 'react'

const Logs = () => {
    useEffect (() => {
        document.title = 'Video Synthesis Application - logs'
    })
    return (
        <div>
            <h1>LOGS</h1>
            <p>This is logs</p>
        </div>
    )
}

export default Logs