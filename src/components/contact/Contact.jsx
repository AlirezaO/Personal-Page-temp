import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IconContext } from "react-icons"

import { HomeImages } from '../../utils/HomeImages';

const drawerWidth = 80;


export default function Contact() {
  return (
    <Box sx={{ display: 'flex' }}>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'content-box',
            overflowX: 'hidden',
            
          },
        }}
        variant="permanent"
        anchor="right"
      >

        <List sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          {HomeImages.map((item, index) => (
            <ListItem key={item.title} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <IconContext.Provider value={{ className: "shared-class", size: 50 }}>
                        <a href={item.link} >
                            {item.icon}
                        </a>
                        </IconContext.Provider>

                    </ListItemIcon>
                
                </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}