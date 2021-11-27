import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Divider from '@mui/material/Divider';

export const DrawerListItems = (
    <div>
        <List>
            <ListItem button>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText>
                    Home
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText>
                    Inbox
                </ListItemText>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button>
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText>
                    School
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText>
                    Homework
                </ListItemText>
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button>
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText>
                    School
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText>
                    Homework
                </ListItemText>
            </ListItem>
        </List>
    </div>
);