import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles'
import BannerContent from './BannerContent'

const BannerContainer = styled.div`
    width: 100%;
    margin: -100px auto;
`

function TopContainer() {
    return (
        <BannerContainer id = "dashboard">
            <BannerContent />
        </BannerContainer>
    )
}

export default TopContainer
