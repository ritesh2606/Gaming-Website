import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './header.css';


export default function header () {

    return (
        <div id='head'> 
            <IconButton edge="start" id="icon"  aria-label="menu">
            <MenuIcon id="icons"/>
          </IconButton>
          <div id="Text">E-World Gaming</div>
        </div>
    );
}