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

//icon
import { IconButtonProps } from '@mui/material/IconButton';

//AppBarMenu
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { DrawerListItems } from './drawerlistitem'

//Tabs
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

//Card
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardActionArea } from '@mui/material';

//Stack
import Stack from '@mui/material/Stack';

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

//Tab
interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

//MenuCard
interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

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

    //Tab
    const [valueTab, setValueTab] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValueTab(newValue);
    };

    //MenuCard
    //M_Monday
    const [expandedM_Mon, setExpandedM_Mon] = React.useState(false);

    const handleExpandClickM_Mon = () => {
        setExpandedM_Mon(!expandedM_Mon);
    };

    //M_Tuesday
    const [expandedM_Tue, setExpandedM_Tue] = React.useState(false);

    const handleExpandClickM_Tue = () => {
        setExpandedM_Tue(!expandedM_Tue);
    };

    //M_Wed
    const [expandedM_Wed, setExpandedM_Wed] = React.useState(false);

    const handleExpandClickM_Wed = () => {
        setExpandedM_Wed(!expandedM_Wed);
    };

    //M_Thu
    const [expandedM_Thu, setExpandedM_Thu] = React.useState(false);

    const handleExpandClickM_Thu = () => {
        setExpandedM_Thu(!expandedM_Thu);
    };

    //M_Fri
    const [expandedM_Fri, setExpandedM_Fri] = React.useState(false);

    const handleExpandClickM_Fri = () => {
        setExpandedM_Fri(!expandedM_Fri);
    };

    //M_Reg
    const [expandedM_Reg, setExpandedM_Reg] = React.useState(false);

    const handleExpandClickM_Reg = () => {
        setExpandedM_Reg(!expandedM_Reg);
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
                        Food Menus of Catering Services in Campus
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

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={valueTab} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Rendezvous" {...a11yProps(0)} />
                        <Tab label="Cafe (A)" {...a11yProps(1)} />

                    </Tabs>
                </Box>
                <TabPanel value={valueTab} index={0}>
                    Menu of Rendezvous at M Building

                    <Stack direction="row" spacing={5}>
                        <Box sx={{ minWidth: 500 }}>

                            <Card sx={{ maxWidth: 500, my: 1 }}>
                                <CardActionArea
                                    expand={expandedM_Mon}
                                    onClick={handleExpandClickM_Mon}>
                                    <CardHeader
                                        action={
                                            <ExpandMore
                                                expand={expandedM_Mon}
                                                onClick={handleExpandClickM_Mon}
                                            // aria-expanded={expandedM_Mon}
                                            //aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        }
                                        title="Monday"
                                    >
                                    </CardHeader>
                                </CardActionArea>
                                <Collapse in={expandedM_Mon} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Monday menu:</Typography>
                                        <div style={{ height: 300, width: '100%' }}>
                    //Table Mon here
                                        </div>
                                    </CardContent>
                                </Collapse>
                            </Card>

                            <Card sx={{ maxWidth: 500, my: 1 }}>
                                <CardActionArea
                                    expand={expandedM_Tue}
                                    onClick={handleExpandClickM_Tue}>
                                    <CardHeader
                                        action={
                                            <ExpandMore
                                                expand={expandedM_Tue}
                                                onClick={handleExpandClickM_Tue}
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        }
                                        title="Tuesday"
                                    >
                                    </CardHeader>
                                </CardActionArea>
                                <Collapse in={expandedM_Tue} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Tuesday menu:</Typography>
                                        <div style={{ height: 300, width: '100%' }}>
                    //Table Tue here
                                        </div>
                                    </CardContent>
                                </Collapse>
                            </Card>

                            <Card sx={{ maxWidth: 500, my: 1 }}>
                                <CardActionArea
                                    expand={expandedM_Wed}
                                    onClick={handleExpandClickM_Wed}>
                                    <CardHeader
                                        action={
                                            <ExpandMore
                                                expand={expandedM_Wed}
                                                onClick={handleExpandClickM_Wed}
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        }
                                        title="Wednesday"
                                    >
                                    </CardHeader>
                                </CardActionArea>
                                <Collapse in={expandedM_Wed} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Wednesday menu:</Typography>
                                        <div style={{ height: 300, width: '100%' }}>
                    //Table Wed here
                                        </div>
                                    </CardContent>
                                </Collapse>
                            </Card>

                            <Card sx={{ maxWidth: 500, my: 1 }}>
                                <CardActionArea
                                    expand={expandedM_Thu}
                                    onClick={handleExpandClickM_Thu}>
                                    <CardHeader
                                        action={
                                            <ExpandMore
                                                expand={expandedM_Thu}
                                                onClick={handleExpandClickM_Thu}
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        }
                                        title="Thusday"
                                    >
                                    </CardHeader>
                                </CardActionArea>
                                <Collapse in={expandedM_Thu} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Thursday menu:</Typography>
                                        <div style={{ height: 300, width: '100%' }}>
                    //Table Thu here
                                        </div>
                                    </CardContent>
                                </Collapse>
                            </Card>

                            <Card sx={{ maxWidth: 500, my: 1 }}>
                                <CardActionArea
                                    expand={expandedM_Fri}
                                    onClick={handleExpandClickM_Fri}>
                                    <CardHeader
                                        action={
                                            <ExpandMore
                                                expand={expandedM_Fri}
                                                onClick={handleExpandClickM_Fri}
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        }
                                        title="Friday"
                                    >
                                    </CardHeader>
                                </CardActionArea>
                                <Collapse in={expandedM_Fri} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Friday menu:</Typography>
                                        <div style={{ height: 300, width: '100%' }}>
                    //Table Fri here
                                        </div>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Box>
                        <Box sx={{ minWidth: 500 }}>
                            <Card sx={{ maxWidth: 500, my: 1 }}>
                                <CardActionArea
                                    expand={expandedM_Reg}
                                    onClick={handleExpandClickM_Reg}>
                                    <CardHeader
                                        action={
                                            <ExpandMore
                                                expand={expandedM_Reg}
                                                onClick={handleExpandClickM_Reg}
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        }
                                        title="Regular menu"
                                    >
                                    </CardHeader>
                                </CardActionArea>
                                <Collapse in={expandedM_Reg} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph>Regday menu:</Typography>
                                        <div style={{ height: 300, width: '100%' }}>
                                            //Table Reg here
                                        </div>
                                    </CardContent>
                                </Collapse>
                            </Card>
                            
                        </Box>
                    </Stack>

                </TabPanel>
                <TabPanel value={valueTab} index={1}>
                    Menu of Cafe at S.H.HO Academic Building (A)
                </TabPanel>

                {/*<Typography paragraph>
                    Paragraph 1
                </Typography>
                <Typography paragraph>
                    Paragraph 2
                </Typography>*/}
            </Box>
        </Box>
    );
}
