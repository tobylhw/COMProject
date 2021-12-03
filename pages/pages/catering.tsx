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
//theme
import { maintheme } from './theme'
import { ThemeProvider } from '@mui/material/styles';

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

//DataGrid
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

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

//M-can menu
const columns_regmenu: GridColDef[] = [
    { field: 'id', headerName: '', width: 10 },
    { field: 'name', headerName: 'Name', width: 350 },
    { field: 'price', headerName: 'Price', width: 60, },
];

const rows_lunch = [
    { id: 'A', name: 'Fried Steak Rice/ Spaghetti', price: '$38', },
    { id: 'B', name: 'Fried Pork Chop Rice/ Spaghetti', price: '$38', },
    { id: 'C', name: 'Fried Chicken Rice/ Spaghetti', price: '$38', },
    { id: 'D', name: 'Spaghetti Bolognese', price: '$32', },
    { id: 'E', name: 'Baked Pork Chop Rice/ Spaghetti', price: '$33', },
    { id: 'F', name: 'Japanese Curry Chicken Chop Rice/ Spaghetti', price: '$35', },
    { id: 'G', name: 'Chicken Skewer & Fried Fish Fillet Rice/ Spaghetti', price: '$35', },
    { id: 'CD1', name: '2-Choice of Dish with Rice', price: '$27', },
    { id: 'CD2', name: '3-Choice of Dish with Rice', price: '$31', },

];

const rows_bbq = [
    { id: 'A', name: '1-Choice BBQ with Soup Noodle', price: '$20', },
    { id: 'B', name: '2-Choice BBQ with Soup Noodle', price: '$20', },
    { id: 'C', name: '1-Choice BBQ with Rice', price: '$20', },
    { id: 'D', name: '2-Choice BBQ with Rice', price: '$20', },
    { id: 'E', name: '4-Treasure with Rice', price: '$20', },
];

//A-cafe menu
const columns_Acan: GridColDef[] = [
    { field: 'id', headerName: '', width: 10, hide: true },
    { field: 'name', headerName: 'Name', width: 350 },
    { field: 'price', headerName: 'Price', width: 100 },
];

const rows_Acan_breakfast = [
    { id: '1', name: 'Muffin', price: '$19' },
    { id: '2', name: 'Cinnamon Roll', price: '$19' },
    { id: '3', name: 'Caramel Pancake', price: '$19' },
    { id: '4', name: 'Ham & Cheese Croissant ', price: '$23' },
    { id: '5', name: 'Tuna Toastie', price: '$24' },
    { id: '6', name: 'Tuna Mayo Packed Sandwiches', price: '$26' },
    { id: '7', name: 'Egg Mayo Packed Sandwiches', price: '$26' },
    { id: '8', name: 'Tomato & Cheese Packed Sandwiches', price: '$26' },
    {
        id: '9',
        name: 'Egg Benedict with Smoked Gammon Ham on English Muffin',
        price: '$30',
    },
    {
        id: '0',
        name: 'Egg Benedict with Smoked Salmon on English Muffin',
        price: '$30',
    },
];

const rows_Acan_lunch = [
    { id: '1', name: 'Grilled Chicken 2pcs + Salad', price: '$19' },
    { id: '2', name: 'Grilled Chicken 2pcs + Baked potato wedges', price: '$19' },
    {
        id: '3',
        name: 'Grilled Chicken 2pcs + Rice w Cream of Corn',
        price: '$19',
    },
    { id: '4', name: 'Tomato Basil Spaghetti ', price: '$23' },
    { id: '5', name: 'Spaghetti with Ham & Cheese', price: '$24' },
    { id: '6', name: 'Japanese Curry w/ Pork Chop', price: '$26' },
    { id: '7', name: 'Japanese Curry w/ Chicken Steak', price: '$26' },
];

const rows_Acan_tea = [
    { id: '1', name: 'Muffin', price: '$18' },
    { id: '2', name: 'Cinnamon Roll', price: '$18' },
    { id: '3', name: 'Chocolate Croissant', price: '$18' },
    { id: '4', name: 'Chef Salad', price: '$27' },
    { id: '5', name: 'Green Salad with Basalmic Vinegar ', price: '$27' },
    { id: '6', name: 'Toasted Pepperoni & Cheese Panini ', price: '$27' },
    { id: '7', name: 'Toasted Pastrami Beef & Cheese Panini', price: '$27' },
    { id: '8', name: 'Hot Dog', price: '$26' },
    { id: '9', name: 'Tuna Mayo Packed Sandwiches', price: '$26' },
    { id: '0', name: 'Egg Mayo Packed Sandwiches', price: '$26' },
];

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
    const [expandedM_Reg, setExpandedM_Reg] = React.useState(true);

    const handleExpandClickM_Reg = () => {
        setExpandedM_Reg(!expandedM_Reg);
    };

    return (
        <ThemeProvider theme={maintheme}>
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
                        <Typography variant="h5" >
                            Menu of Rendezvous at M Building 
                        </Typography>
                        <Typography sx={{ my:1 }} >
                            Choice of Dish $27/$31<br/>Daily Soup, Hot or Soft Drink +$6<br/>Cold Drink +$7
                        </Typography>
                            <Box sx={{ minWidth: 500 }}>

                                <Card sx={{ maxWidth: 500, my: 1 }}>
                                    <CardActionArea
                                        onClick={handleExpandClickM_Mon}>
                                        <CardHeader
                                            action={
                                                <ExpandMore
                                                    expand={expandedM_Mon}
                                                    onClick={handleExpandClickM_Mon}
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
                                            <div style={{ height: 100, width: '100%' }}>
                                                <Typography sx={{ fontSize: 20 }} >
                                                Mabo Tofu<br />
                                                Sweet and Sour Chicken<br />
                                                Braised Beef Brisket
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Collapse>
                                </Card>

                                <Card sx={{ maxWidth: 500, my: 1 }}>
                                    <CardActionArea
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
                                            <div style={{ height: 100, width: '100%' }}>
                                                <Typography sx={{ fontSize: 20 }} >
                                                    Braised Tofu with Roast Pork<br />
                                                    Braised Chicken with Potatoes<br />
                                                    Scrambled Eggs with Shrimp
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Collapse>
                                </Card>

                                <Card sx={{ maxWidth: 500, my: 1 }}>
                                    <CardActionArea
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
                                            <div style={{ height: 100, width: '100%' }}>
                                                <Typography sx={{ fontSize: 20 }} >
                                                    Spare Ribs with Black Bean Sauce<br />
                                                    Bitter Melon Fried Pork<br />
                                                    Fish Fillet in Sweet Corn Sauce
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Collapse>
                                </Card>

                                <Card sx={{ maxWidth: 500, my: 1 }}>
                                    <CardActionArea
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
                                            <div style={{ height: 100, width: '100%' }}>
                                                <Typography sx={{ fontSize: 20 }} >
                                                    Steamed Eggs with Dried Scallops<br />
                                                    Braised Pork Belly<br />
                                                    Spicy Boiled Beef
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Collapse>
                                </Card>

                                <Card sx={{ maxWidth: 500, my: 1 }}>
                                    <CardActionArea
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
                                            <div style={{ height: 100, width: '100%' }}>
                                                <Typography sx={{ fontSize: 20 }} >
                                                    Braised Eggplant with Shredded Pork<br />
                                                    Chinese Beef Tenderloin<br />
                                                    Curry Fish Balls with Radish
                                                </Typography>
                                            </div>
                                        </CardContent>
                                    </Collapse>
                                </Card>

                                <Card sx={{ maxWidth: 500, my: 1 }}>
                                    <CardActionArea
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
                                            <div style={{ height: 700, width: '100%' }}>
                                                <Typography sx={{ my: 1, fontSize: 20 }} >Lunch : </Typography>
                                                <DataGrid
                                                    autoHeight
                                                    rows={rows_lunch}
                                                    columns={columns_regmenu}
                                                    disableSelectionOnClick
                                                    hideFooter
                                                    density='compact'
                                                />
                                                <Typography sx={{ my: 1, fontSize: 20 }} >BBQ : </Typography>
                                                <DataGrid
                                                    autoHeight
                                                    rows={rows_bbq}
                                                    columns={columns_regmenu}
                                                    disableSelectionOnClick
                                                    hideFooter
                                                    density='compact'
                                                />
                                            </div>
                                        </CardContent>
                                    </Collapse>
                                </Card>
                            
                            </Box>


                    </TabPanel>
                    <TabPanel value={valueTab} index={1}>
                        <div style={{ width: 500 }}>
                            <Typography variant="h5" >
                                Menu of Cafe at S.H.HO Academic Building (A)
                            </Typography>
                            <Typography sx={{ mt: 2, fontSize: 20 }}>
                                Breakfast
                            </Typography>
                            <Typography sx={{ fontSize: 16 }}>
                                Sets are served with coffee or tea
                            </Typography>
                            <DataGrid
                                autoHeight
                                rows={rows_Acan_breakfast}
                                columns={columns_Acan}
                                disableSelectionOnClick
                                hideFooter
                                density="compact"
                            />
                        </div>
                        <div style={{ width: 500 }}>
                            <Typography sx={{ my: 2, fontSize: 20 }}>
                                Lunch
                            </Typography>
                            <DataGrid
                                autoHeight
                                rows={rows_Acan_lunch}
                                columns={columns_Acan}
                                disableSelectionOnClick
                                hideFooter
                                density="compact"
                            />
                        </div>
                        <div style={{ width: 500 }}>
                            <Typography sx={{ my: 2, fontSize: 20 }}>
                                Tea sets (3pm-6:30pm)
                            </Typography>
                            <DataGrid
                                autoHeight
                                rows={rows_Acan_tea}
                                columns={columns_Acan}
                                disableSelectionOnClick
                                hideFooter
                                density="compact"
                            />
                        </div>

                    </TabPanel>

                    {/*<Typography paragraph>
                        Paragraph 1
                    </Typography>
                    <Typography paragraph>
                        Paragraph 2
                    </Typography>*/}
                </Box>
            </Box>
        </ThemeProvider>
    );
}
