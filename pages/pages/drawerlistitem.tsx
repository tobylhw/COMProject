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
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import EventIcon from '@mui/icons-material/Event';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import GradingIcon from '@mui/icons-material/Grading';
import ListItemButton from '@mui/material/ListItemButton';


export const DrawerListItems = (
    <div>
        <List>
            <ListItemButton component="a" href="home">
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText>
                    Home
                </ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <EventIcon />
                </ListItemIcon>
                <ListItemText>
                    Calendar
                </ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ConnectWithoutContactIcon />
                </ListItemIcon>
                <ListItemText>
                    Social
                </ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <GradingIcon />
                </ListItemIcon>
                <ListItemText>
                    Grade
                </ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText>
                    Inbox
                </ListItemText>
            </ListItemButton>
        </List>
        <Divider />
        <List>
            <ListItemButton>
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText>
                    School
                </ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <MenuBookIcon />
                </ListItemIcon>
                <ListItemText>
                    Homework
                </ListItemText>
            </ListItemButton>
        </List>
        <Divider />
        <List>
            <ListItemButton>
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText>
                    Settings
                </ListItemText>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <HelpIcon />
                </ListItemIcon>
                <ListItemText>
                    Help
                </ListItemText>
            </ListItemButton>
        </List>
    </div>
);