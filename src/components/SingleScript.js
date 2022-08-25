import React, { useContext, useEffect, useState} from 'react'
//import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ScriptContext } from './ScriptContext'
import styled from 'styled-components'
const { CFG_HOST, CFG_PORT } = require('../config')

const Wrapper = styled.div `
    position: absolute;
    box-sizing: border-box;
    width: auto;
    height: auto;
`

const SingleScript = () => {
    const [script, setScript] = useContext(ScriptContext)
    const [scriptData, setscriptData] = useState(script)

    useEffect(() => {
        fetch(`http://${CFG_HOST}:${CFG_PORT}/script?file=${script}`)
            .then(response => response.json())
            .then(response => {
                const data = response ? response.data : ''
                setscriptData(data)
                return response.data
            })
            .catch(error => {
                const data = (error.toString() === 'TypeError: Load failed') ? '' : error.toString()
                setscriptData(data)
                return error
        })
    }, [script])

    return (
        <Wrapper>
            {scriptData}
        </Wrapper>
    )
}

export default SingleScript