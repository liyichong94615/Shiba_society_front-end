import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import Grid from '@material-ui/core/Grid';

import { colors } from '../../styles'

import icognito from '../../assets/images/animation1.gif'
import consent from '../../assets/images/animation2.gif'
import coinbox from '../../assets/images/animation3.gif'

const ItemContainer = styled.div`
    width: 75%;
    height:100%;
    margin: 0em auto 3em;
    background: rgb(${colors.main});
    @media (max-width: 800px) {
        margin: 4em auto 3em;
    }
`

function ItemList() {
    return (
        <ItemContainer>
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Card url={icognito} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card url={consent} />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card url={coinbox} />
                </Grid>
            </Grid>
        </ItemContainer>
    )
}

export default ItemList
