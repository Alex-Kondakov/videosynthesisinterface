import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
const { CFG_HOST, CFG_PORT } = require('../config')

const PidBar = () => {
    const [variant, setVariant] = useState('light')
    const [data, setData] = useState('Fetching...')

    useEffect(() => {
        setInterval(() => {
            fetch(`http://${CFG_HOST}:${CFG_PORT}/pid`)
            .then(response => {
                setVariant('success')
                return response.json()
            })
            .then(response => {
                setData(`VSDaemon is running with PID: ${response.data}`)
                return response
            })
            .catch(error => {
                setVariant('danger')
                setData('VSDaemon is offline. Type "cd /path/to/videoSynthesisDaemon && node server" in console for VSDaemon run.')
                return error
            })
        }, 500)
    }, [variant, data])
        
    return (
        <Alert key={variant} variant={variant}>
            {data}
        </Alert>
    )
}

export default PidBar