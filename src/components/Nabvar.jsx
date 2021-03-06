import {  Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import MailIcon from '@mui/icons-material/Mail';

const Container = styled.div`
        height: 80px;
        background-color: yelow;
`

const Wrapper = styled.div`
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;

`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    margin-left: 25px;
    display: flex;
    align-items: center;
    padding: 5px;
`
const Input = styled.input`
    border: none;
`

const Logo = styled.h1`
    font-weight: bold;
    text-transform: uppercase;
`

const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`
const Center = styled.div`
    flex: 1;  
    text-align: center;
`
const Right = styled.div `
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Nabvar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize:16}}/>
                    </SearchContainer>

                </Left>
                <Center> <Logo >BycicleMont</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SING IN </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            
                            <ShoppingCartOutlined/>
                        </Badge>

                        
                    </MenuItem>

                </Right>
            </Wrapper>
           
        </Container>
    )
}

export default Nabvar
