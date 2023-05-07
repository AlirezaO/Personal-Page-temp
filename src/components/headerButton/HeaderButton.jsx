import React from "react";
import Button from '@mui/material/Button';
import './style.css';



const HeaderButton = ({key, sx, href, title}) => {
    return(
        <Button key={key} sx={sx} href={href} className="header-button">
            {title}
        </Button>
    )
}

export default HeaderButton