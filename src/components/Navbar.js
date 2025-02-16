import { Padding, ShoppingCartOutlined } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { Badge} from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import {mobile, tablet} from "../responsive"
import {  Routes,Route,NavLink,Navigate } from 'react-router-dom'
import './Navbar.css'


const Container = styled.div`
    height:60px;    
    ${mobile({height:"50px"})}
    ${tablet({height:"55px" , marginBottom:"5px"})}
`;

const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    ${mobile({Padding:"10px 0px"})}
   
`;

const Left = styled.div`
    flex:1;
    display: flex;
    align-items:center;
     
`;
const Language = styled.span`
    cursor:pointer;
    font-size:14px;
    ${mobile({display:"none"})}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items:center;
    margin-left:25px;
    padding:5px;
`;
const Input = styled.input`
    border:none;
    ${mobile({width:"50px"})}
    ${tablet({width:"100%"})}
`;

const Center = styled.div`
    flex:1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight:bold;
    ${mobile({fontSize:"24px"})}
`
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2 , justifyContent:"center"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px", marginLeft:"10px"})}
`


const Navbar = () => {
  return (
    <Container>
    <Wrapper>
        <Left>
        <Language>EN</Language>
        <SearchContainer>
            <Input placeholder='Search'></Input>
           <SearchIcon style={{color:'gray',fontSize:16}}/>
        </SearchContainer>
        </Left>
        <Center>
            <Logo>ShopGen</Logo>
        </Center>
        <Right>
            {/* <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN-IN</MenuItem> */}
            <ul className='display:flex'>
            <li className="nav-item">
                  {/* to load home page automatically to is / */}
             <NavLink className="nav-link " to="/">Home</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link " to="productlist">ProductList</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link " to="product">Product</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link " to="register">Register</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link " to="login">Login</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link " to="cart"> 
            <MenuItem>
                <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
                 </Badge>
                </MenuItem>
            </NavLink>
            </li>
            </ul>
            {/* <MenuItem>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlined />
            </Badge>
            </MenuItem> */}
        </Right>
    </Wrapper>
</Container>
  )
}

export default Navbar