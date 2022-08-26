import React from 'react'
import styled from 'styled-components'
import Header from './Header'


const Wrapper = styled.div `
    position: absolute;
    height: 100%;
    width: 100%;
`
const Main = styled.main `
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 30px;
`



const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Wrapper>
                <Header />
                <Main>
                    {children}
                </Main>
            </Wrapper>
        </React.Fragment>
    )
}

export default Layout