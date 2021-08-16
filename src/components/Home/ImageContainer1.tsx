import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { colors } from '../../styles'
import arrow from '../../assets/images/arrow.png';

interface Props {
    url: number;
    title: string;
    description: any;
    first: boolean;
    last: boolean;
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
    width: 80%;
    margin: 0 auto 0 auto;
    padding:0 40px 40px 40px;
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
const Description1 = styled.p`
    color: white;
    font-size: 24px;
`
const Title = styled.p`
    color: white;
    font-size: 36px;
`
const ContainerImg = styled.div`
    width: 80px;
    height: 80px;
    justify-content:center;
    align-items:center;
    display:flex;
    background-color:#D35BFF;
    border: 3px solid white;
    border-radius:40px;
    margin-top:-40px;
`
const ContainerImg1 = styled.div`
    width: 120px;
    height: 120px;
    justify-content:center;
    align-items:center;
    display:flex;
    background-color:#D35BFF;
    border: 3px solid white;
    border-radius:60px;
    margin-top:-40px;
`
const ArrowImg = styled.img`
    width: 22px;
    height: 65px;
`
const OutlineButton = styled.button`
    max-width: 272px;
    width: 100%;
    height: 54px;
    border-radius: 20px;
    border: 1px solid rgb(${colors.fontColor});
    color: rgb(${colors.fontColor});
    background: transparent;
    margin: 1em 0;
    transition: all 0.2s ease-out;
    @media (max-width: 550px) {
        width: 90%;
    }
    &:hover {
        cursor: pointer;
        color: rgb(${colors.main});
        background: rgb(${colors.fontColor});
    }
`

const ImageContainer1: React.FC<Props> = ({ url, title, description, first, last }) => {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <div style={{ width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center', marginTop: first == true ? 100 : 45 }}>
                    {last == true ? <ContainerImg1>
                        <Description1>
                            {url}%
                        </Description1>
                        </ContainerImg1> : 
                        <ContainerImg>
                            <Description1>
                                {url}%
                            </Description1>
                        </ContainerImg>
                    }
                </div>
                <Title style={{ width: '100%' }}>{title}</Title>
                <Description>
                    {description}
                </Description>
            </Container >
            {last == true ? null :
                <div style={{ width: '100%', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <ArrowImg src={arrow} />
                </div>
            }
        </div>
    )
}

export default ImageContainer1;