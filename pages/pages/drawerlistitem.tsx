import * as React from 'react';
import List from '@mui/material/List';
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
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LinkIcon from '@mui/icons-material/Link';


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
            <ListItemButton component="a" href="#">
                <ListItemIcon>
                    <EventIcon />
                </ListItemIcon>
                <ListItemText>
                    Calendar
                </ListItemText>
            </ListItemButton>
            <ListItemButton component="a" href="#">
                <ListItemIcon>
                    <ConnectWithoutContactIcon />
                </ListItemIcon>
                <ListItemText>
                    Social
                </ListItemText>
            </ListItemButton>
            <ListItemButton component="a" href="#">
                <ListItemIcon>
                    <GradingIcon />
                </ListItemIcon>
                <ListItemText>
                    Grade
                </ListItemText>
            </ListItemButton>

        </List>
        <Divider />
        <List>
            <ListItemButton component="a" href="school">
                <ListItemIcon>
                    <SchoolIcon />
                </ListItemIcon>
                <ListItemText>
                    School
                </ListItemText>
            </ListItemButton>
            <ListItemButton component="a" href="canteen">
                <ListItemIcon>
                    <RestaurantIcon />
                </ListItemIcon>
                <ListItemText>
                    Canteen
                </ListItemText>
            </ListItemButton>
            <ListItemButton component="a" href="usefullinks">
                <ListItemIcon>
                    <LinkIcon />
                </ListItemIcon>
                <ListItemText>
                    Useful Links
                </ListItemText>
            </ListItemButton>
        </List>
        <Divider />
        <List>
            <ListItemButton disabled>
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