import React, { useState, useEffect, useContext } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { ScriptContext } from "./ScriptContext"
const { CFG_HOST, CFG_PORT } = require('../config')


const ScriptsDropdown = () => {
    const [items, setItems] = useState([<Dropdown.Item>Fetching...</Dropdown.Item>])
    const [script, setScript] = useContext(ScriptContext)

    useEffect(() => {
        fetch(`http://${CFG_HOST}:${CFG_PORT}/scripts`)
            .then(response => response.json())
            .then(response => response.data)
            .then(response => response.map(scriptFileName => <Dropdown.Item onClick={() => setScript(scriptFileName)}>{scriptFileName}</Dropdown.Item>))
            .then(response => {
                setItems(response)
                return response
            })
            .catch(error => {
                setItems([<Dropdown.Item>Empty</Dropdown.Item>])
                return error
        })
    })

    return (
        <DropdownButton id="dropdown-basic-button" title="Select script to continue">
            {items}
        </DropdownButton>
    )
}

export default ScriptsDropdown