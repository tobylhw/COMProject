/* CMD
cd C:\Users\tobyl\compj

npm run dev
npm install @types/react typescript
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto
*/

import { useState } from 'react';
import * as React from 'react';

//font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//DrawerList
import { DrawerListItems } from './drawerlistitem'
//AppBarMenu
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//icon
import LogoutIcon from '@mui/icons-material/Logout';



const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Home(props) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar /*position="fixed"*/ open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                        Links to all pages
                    </Typography>

                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <Divider />
                        <MenuItem component='a' href="login" onClick={handleClose}>Logout</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {DrawerListItems}
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Box >
                    <Box >
                        {"<Box>"}Go to pages:{"</Box>"}
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button variant="contained" href="layoutTemplate">Web Layout Template</Button>
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button variant="outlined" href="login">Login</Button>
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button variant="outlined" href="newUser_hsu">New user hsu</Button>
                            <Button variant="outlined" href="newUser_public">New user public</Button>
                        </Stack>
                        <Divider />
                        <Box >
                            {"<Box>"}Not done:{"</Box>"}
                        </Box>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button variant="outlined" href="home">Home</Button>
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button disabled variant="outlined" href="">Calendar</Button>
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button disabled variant="outlined" href="">Social</Button>
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button disabled variant="outlined" href="">Grade</Button>
                        </Stack>
                        <Divider />
                        
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button variant="outlined" href="school">School</Button>
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button variant="outlined" href="catering">Catering</Button>
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button variant="outlined" href="usefullinks">Useful Links</Button>
                        </Stack>
                        <Divider />
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button disabled variant="outlined" href="">Settings</Button>
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button variant="outlined" href="help">help</Button>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box >
                        {"<Box>"}Layout testings:{"</Box>"}
                    </Box>
                    <Box sx={{ p: 1 }}>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button variant="outlined" href="TEST_login">Login Layout Testing</Button>
                            <Button variant="outlined" href="TEST_Dashboard_Layout_Demo">Dashboard Demo Layout</Button>
                        </Stack>
                        <Stack spacing={2} direction="row" sx={{ p: 0.5 }}>
                            <Button variant="outlined" href="TEST_drawer">Drawer Testing</Button>
                        </Stack>
                    </Box>
                    <p>{"<p>"}Testing {"</p>"} </p>
                    <p>{"<p>"}Testing2{"</p>"}</p>
                </Box>
            </Box>
        </Box>
    );
}