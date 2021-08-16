import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'
import arrow from '../../assets/images/arrow.png';

interface Props {
    title: string;
    description1: string;
    description2: string;
    description3: any;
}

const useStyles = makeStyles((theme) => ({
    rootCont: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
    RightRootCont: {
        display: 'flex',
        flexDirection: 'row-reverse',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column-reverse',
        },
    },
    textCont: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
    },
    imgCont: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const Container = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 auto 0 auto;
    padding:10px 20px 10px 20px;
    background: #004aad;
`
const ImageCover = styled.div`
    width: 100%;
    
`
const Description = styled.p`
    color: white;
    font-size: 18px;
    line-height:2;
`
const Title = styled.p`
    color: white;
    font-size: 36px;
`

const ImageContainer2: React.FC<Props> = ({ title, description1, description2, description3}) => {
    const classes = useStyles();
    return (
        <Container>
            <Title style={{ width: '100%' }}>{title}</Title>
            <Description>
                {description1}
            </Description>
            <Description>
                {description2}
            </Description>
            <Description>
                {description3}
            </Description>
        </Container >
    )
}

export default ImageContainer2;