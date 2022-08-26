import React, { useEffect } from 'react'
import styled from 'styled-components'
import RemoteForm from '../components/RemoteForm'

const Container = styled.div `
    width: 60%;
    margin: 0 auto;
`

const Remote = () => {
    useEffect (() => {
        document.title = 'Video Synthesis Application - New task from remote sources'
    })
    return (
        <Container>
            <RemoteForm />
        </Container>
    )
}

export default Remote