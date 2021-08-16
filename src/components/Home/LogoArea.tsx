import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/logo.png'
import { colors } from '../../styles'

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const LogoTitle = styled.h3`
    font-weight: 700;
    color: rgb(${colors.fontColor});
    font-size: 22px;
    margin: 0 1em;
`

function LogoArea() {
    return (
        <LogoContainer>
            <img src={logo} style={{ width: 52, height: 52 }} alt="logo" />
            <LogoTitle>Buccaneer V3</LogoTitle>
        </LogoContainer>
    )
}

export default LogoArea
