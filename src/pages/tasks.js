import React, { useEffect } from 'react'

const Tasks = () => {
    useEffect (() => {
        document.title = 'Video Synthesis Application - Tasks'
    })
    return (
        <div>
            <h1>TASKS</h1>
            <p>This is tasks</p>
        </div>
    )
}

export default Tasks


/*
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ScriptContext } from "../components/ScriptContext";
import ScriptsDropdown from '../components/ScriptsDropdown'
import SingleScript from '../components/SingleScript'


const SideBar = styled.div `
    position: absolute;
    box-sizing: border-box;
    width: 20%;
    height: auto;
`
const Content = styled.div `
    position: absolute;
    box-sizing: border-box;
    left: calc(20% + 30px);
    right: 30px;
    height: auto;
`

const Scripts = () => {
    const [script, setScript] = useState("")

    useEffect (() => {
        document.title = 'Video Synthesis Application - scripts'
    })
    return (
        <ScriptContext.Provider value={[script, setScript]}>
            <SideBar>
                <ScriptsDropdown />
            </SideBar>
            <Content>
                <SingleScript />
            </Content>
        </ScriptContext.Provider>
    )
}

export default Scripts
*/