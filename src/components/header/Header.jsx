import React from "react";
import Box from '@mui/material/Box';
import HeaderButton from "../headerButton/HeaderButton";

const navItems = [
    { title: 'Home', path: '/'},
    { title: 'About', path: '/about'},
    { title: 'Contact', path: '/contact'}
];

const Header = () => {
    return(
        <Box sx={{ display: (theme) => theme.breakpoints.up('sm') ? 'flex' : 'none', justifyContent: 'center' }}>
            {navItems.map((item) => (
              <HeaderButton key={item.title} sx={{ color: '#eae0d5' }} href={item.path} title={item.title}/>
            ))}
        </Box>
    )
}


export default Header