import * as React from 'react';
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

//List
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
//import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//icon
//import SendIcon from '@mui/icons-material/Send';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

//AppBarMenu
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { DrawerListItems } from './drawerlistitem'
import { ListItemButton } from '@mui/material';

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

export default function MiniDrawer() {

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
                        Useful Links
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
                <Box>
                    <List
                        sx={{ width: '100%', maxWidth: 400, }}
                        component="nav"
                        aria-labelledby="List 1"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Teaching & Learning
                            </ListSubheader>
                        }
                    >
                        <ListItemButton component='a' href='https://www.hsu.edu.hk/en/'>
                            <ListItemText inset primary="HSUHK" secondary=" " />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://moodle.hsu.edu.hk/'>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary="Moodle" secondary=" " />
                            <OpenInNewIcon/>
                        </ListItemButton>
                        <ListItemButton component='a' href='https://ecampus.hsu.edu.hk/desktop/'>
                            <ListItemText inset primary="eCampus" secondary=" " />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://rtiac.clarityenglish.com/#prefix=HSMC'>
                            <ListItemText inset primary="Road to IELTS" secondary=" " />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://academic.veriguide.org/academic/login_HSUHK.jspx'>
                            <ListItemText inset primary="VeriGuide" secondary=" " />
                            <OpenInNewIcon />
                        </ListItemButton>
                    </List>
                    <List
                        sx={{ width: '100%', maxWidth: 400, }}
                        component="nav"
                        aria-labelledby="List 1"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Academic Websites
                            </ListSubheader>
                        }
                    >
                        <ListItemButton component='a' href='https://ceu.hsu.edu.hk/en/home/'>
                            <ListItemIcon>
                                
                            </ListItemIcon>
                            <ListItemText primary="CEU" secondary="Continuing Education Unit" />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://scom.hsu.edu.hk/en/school-of-communication-2/'>
                            <ListItemText inset primary="SCOM" secondary="School of Communication" />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://research.hsu.edu.hk/'>
                            <ListItemText inset primary="Researach Database" />
                            <OpenInNewIcon />
                        </ListItemButton>
                    </List>
                    <List
                        sx={{ width: '100%', maxWidth: 400, }}
                        component="nav"
                        aria-labelledby="List 1"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Administrative Offices
                            </ListSubheader>
                        }
                    >
                        <ListItemButton component='a' href='https://sites.google.com/hsu.edu.hk/aaao-internal?pli=1&authuser=3'>
                            <ListItemIcon>
                                
                            </ListItemIcon>
                            <ListItemText primary="AAAO" secondary="Advancement and Alumni Affairs Office" />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://cdmo.hsu.edu.hk/'>
                            <ListItemText inset primary="CDMO" secondary="Campus Development and Management Office" />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://sites.google.com/a/hsu.edu.hk/cpao/about-cpao'>
                            <ListItemText inset primary="CPAO" secondary="Communications and Public Affairs Office" />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://edc.hsu.edu.hk/'>
                            <ListItemText inset primary="EDC" secondary="Executive Development Centre" />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://fo.hsu.edu.hk/'>
                            <ListItemText inset primary="FO" secondary="Finance Office" />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://itsc.hsu.edu.hk/'>
                            <ListItemText inset primary="ITSC" secondary="Information Technology Services Centre" />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://library.hsu.edu.hk/'>
                            <ListItemText inset primary="Library" secondary=" " />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://registry.hsu.edu.hk/'>
                            <ListItemText inset primary="Registry" secondary=" " />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://sao.hsu.edu.hk/'>
                            <ListItemText inset primary="SAO" secondary="Student Affairs Office" />
                            <OpenInNewIcon />
                        </ListItemButton>
                        <ListItemButton component='a' href='https://sites.google.com/a/hsu.edu.hk/vpodo/home'>
                            <ListItemText inset primary="VPODO" secondary="Vice-President (Organisational Development)" />
                            <OpenInNewIcon />
                        </ListItemButton>
                    </List>
                 
                    {/*<Typography paragraph>
                    Paragraph 1
                </Typography>
                <Typography paragraph>
                    Paragraph 2
                    </Typography>*/}

                </Box>
            </Box>
        </Box>
    );
}
