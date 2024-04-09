import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import { auth, provider } from '../firebase';


const HeaderContainer = styled.div`
    display: grid;
    grid-template-columns: 300px auto 200px;
    align-items: center;
    padding: 5px 20px;
    height: 60px;
    border-bottom: 1px solid lightgray;
    transition: all 0.5s;
`
const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    transition: all 0.5s;
    img {
        cursor: pointer;
        width: 40px;
    }
    span {
        font-size: 22px;
        margin-left: 10px;
        cursor: pointer;
        color: gray;
    }
`

const HeaderSearch = styled.div`
    display: flex;
    align-items: center;
    width: 700px;
    background-color: whitesmoke;
    padding: 12px;
    border-radius: 10px;
    input {
        background-color: transparent;
        border: 0;
        outline: 0;
        flex: 1;
    }
`

const HeaderIcons = styled.div`
    display: flex;
    align-items: center;
    span {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    svg.MuiSvgIcon-root{
        margin: 0px 10px;
    }
`


const Header = ({ photoURL }) => {
  return (
    <HeaderContainer>
        <HeaderLogo>
            <img src='https://upload.wikimedia.org/wikipedia/commons/d/da/Google_Drive_logo.png' alt='Google Drive' />
            <span>Drive</span>
        </HeaderLogo>
        <HeaderSearch>
            <SearchIcon />
            <input type='text' placeholder='Search in Drive' />
            <FormatAlignCenterIcon style={{cursor:'pointer'}} />
        </HeaderSearch>
        <HeaderIcons>
            <span>
                <HelpOutlineOutlinedIcon />
                <SettingsIcon />
                <AppsIcon />
            </span>
            <span>
                <Avatar src={photoURL} />
            </span>
        </HeaderIcons>
    </HeaderContainer>
  )
}

export default Header