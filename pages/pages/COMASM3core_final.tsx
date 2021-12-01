//s187208 Leung Ho Wai COM3102 Assignment 3

//npm install @mui/material
//npm install @mui/icons-material
//npm install @mui/material @emotion/react @emotion/styled
//npm install @fontsource/roboto

import { useState } from 'react';
import * as React from 'react';

import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

//color
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { amber } from '@mui/material/colors';
import { blue } from '@mui/material/colors';

//font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//Snackbar
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//Grid
import { experimentalStyled as styled1 } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

//Drawer
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

//Theme
const theme1 = createTheme({
    palette: {
        primary: {
            main: '#ffd740',
        },
        secondary: {
            main: '#448aff',
        },
    },
});

//Drawer
const drawerWidth = 350;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

//Snackbar
export interface SnackbarMessage {
    message: string;
    key: number;
}

export interface State {
    open_sbarcon: boolean;
    snackPack: readonly SnackbarMessage[];
    messageInfo?: SnackbarMessage;
}

//Grid
const Item = styled1(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'left',
    //color: theme.palette.text.secondary,
}));

//Question
export interface Item {
    id: string;
    title: string;
    description: string;
    price: number;
}

export function getAllItems(): readonly Item[] {
    return shopItems;
}

const shopItems = [
    {
        id: '101',
        title: 'PS5 Router',
        description: 'A good router',
        price: 3499
    },
    {
        id: '307',
        title: 'Hello Melody',
        description: 'A lovely doll',
        price: 199
    },
    {
        id: '299',
        title: 'Acelook',
        description: 'The next-generation product',
        price: 150
    },
    {
        id: '2991',
        title: 'Gitch 1',
        description: 'No idea',
        price: 3333
    },
    {
        id: '2992',
        title: 'Gitch 2',
        description: 'No idea',
        price: 4444
    },
    {
        id: '2993',
        title: 'Gitch 3',
        description: 'No idea',
        price: 111
    },
    {
        id: '2994',
        title: 'Gitch 4',
        description: 'No idea',
        price: 222
    },
    {
        id: '2995',
        title: 'Gitch 5',
        description: 'No idea',
        price: 100
    },
    {
        id: '2996',
        title: 'Gitch 6',
        description: 'No idea',
        price: 22200
    },
    {
        id: '2997',
        title: 'Gitch 7',
        description: 'No idea',
        price: 1
    },
    {
        id: '2998',
        title: 'Gitch 8',
        description: 'No idea',
        price: 345
    }
] as const;

interface LineItem {
    item: string;
    item_title: string;
    quantity: number;
    item_price: number;
}

const Exercise: React.FC = function () {
    const [cart, setCart] = useState<LineItem[]>([]);

    function addItemToCart(item: Item) {
        //Check item exist in cart or not
        let flag: boolean = false;

        for (const n in cart) {
            if (cart[n].item == item.id) {
                flag = true;
                cart[n].quantity++;
                setCart([...cart]);
            }
        }
        if (flag !== true) {
            setCart([...cart, { item: item.id, quantity: 1, item_price: item.price, item_title: item.title }]);
            flag = false;
        }
    }

    function removeItem(index: number) {
        cart.splice(index, 1);
        setCart([...cart]);
    }

    function onQuanChange(index: number, value: number) {
        //If value<= 0 then remove 
        cart[index].quantity = value;
        if (value <= 0) {
            removeItem(index);
        } else {
            setCart([...cart]);
        }
    }

    function CalSum() {
        //Function to calculate sum
        let value = 0;
        for (const n in cart) {
            value = value + cart[n].quantity * cart[n].item_price;
        }
        return <Typography variant="h6">Total amount: ${value} </Typography>
    }

    //Drawer
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    //Dialog
    const [open_dig, setOpen_dig] = React.useState(false);

    const handleClickOpen = () => {
        setOpen_dig(true);
    };

    const handleClose = () => {
        setOpen_dig(false);
    };

    //Snackbar
    const [open_sbar, setOpen_sbar] = React.useState(false);

    const handleClick_sbar = () => {
        setOpen_sbar(true);
    };

    const handleClose_sbar = (
        event: React.SyntheticEvent | React.MouseEvent,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen_sbar(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose_sbar}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    //return
    return (
        <div>
            <ThemeProvider theme={theme1}>
            
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                

                    <AppBar position="fixed" color="primary" open={open}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                /*onClick={handleDrawerOpen}*/
                                edge="start"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                                Product Catalog
                            </Typography>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerOpen}
                                sx={{ ...(open && { display: 'none' }) }}
                            >
                                <ShoppingCartIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                <Main open={open}>
                    <DrawerHeader />
                    <Typography paragraph>
                        <h1> New arrivals! Come and take a look! </h1>

                        {shopItems.map(item => (
                            <ShopItem key={item.id} item={item} onAdd={() => addItemToCart(item)} />
                        ))}

                    </Typography>
                </Main>
                /*Drawer*/
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                            <Typography variant="h6">Shopping cart</Typography>
                    </DrawerHeader>
                    <Divider />
                    <List sx={{ pl: 2 }}>
                        {cart.map((item, index) => (
                            <CartItem
                                key={item.item}
                                item={item}
                                onRemove={() => removeItem(index)}
                                onQuanChange={x => onQuanChange(index, x)}
                            />
                        ))}
                    </List>
                    <Divider />
                    <List sx={{ pl: 2 }} >
                            <p />
                            <CalSum />
                            <p/>
                        <Stack direction="row" spacing={2}>
                            {/*Clear all button*/}
                            <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={handleClickOpen}>Clear all</Button>
                            
                            {/*Dialog*/}
                            <Dialog
                                open={open_dig}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">
                                    {"Clear shopping cart"}
                                </DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        This will clear all items in the shopping cart.
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button color="secondary" onClick={handleClose}>Cancel</Button>
                                    <Button color="secondary" onClick={() => { { setCart([]) }; { handleClose() }; { handleClick_sbar() } }} autoFocus>
                                        Clear
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Button variant="contained" startIcon={<PaymentIcon />} >Checkout</Button>
                        </Stack>
                    </List>
                </Drawer>
                <Snackbar
                    open={open_sbar}
                    autoHideDuration={3000}
                    onClose={handleClose_sbar}
                    message="Shopping cart cleared"
                    action={action}
                />
            </Box>
            </ThemeProvider>
        </div>
    );
};

//Print catalog items
const ShopItem: React.FC<{
    item: Item;
    onAdd: () => void;
}> = function ({ item, onAdd }) {

    //Snackbar
    const [open_sbar, setOpen_sbar] = React.useState(false);

    const handleClick = () => {
        setOpen_sbar(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | React.MouseEvent,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen_sbar(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    //Question
    const { title, description, price } = item;

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 2 }}>
                    {Array.from(Array(1)).map((_, index) => (
                        <Grid item xs={2} sm={4} md={3} key={index}>
                            <Item>
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {title}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                        {description}
                                    </Typography>
                                    <Typography variant="body2">
                                        $ {price}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" color="secondary" startIcon={<AddShoppingCartIcon />} onClick={() => { { onAdd() }; { handleClick() } }}>Add to cart</Button>
                                </CardActions>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Box>
                
            <p/>
            <Snackbar
                open={open_sbar}
                autoHideDuration={1500}
                onClose={handleClose}
                message="Added to cart"
                action={action}
            />
        </div>
    );
};

//Print cart
const CartItem: React.FC<{
    item: LineItem;
    onRemove: () => void;
    onQuanChange: (x: number) => void;
}> = function ({ item: lineitem, onRemove, onQuanChange }) {

    //Snackbar
    const [open_sbar, setOpen_sbar] = React.useState(false);

    const handleClick = () => {
        setOpen_sbar(true);
    };

    const handleClose = (
        event: React.SyntheticEvent | React.MouseEvent,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen_sbar(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    //Question
    const { item, quantity, item_title, item_price } = lineitem;
    return (
        <div>
            <p>Item: {item_title}</p>
            <p>Price: ${item_price}</p>
            <p>
                <Stack direction="row" spacing={2}>
                <TextField
                    sx={{ width: '15ch' }}
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{ inputProps: { min: 1 } }}
                    value={quantity}
                    onChange={x => onQuanChange(parseInt(x.target.value))}
                    size="small"
                />
                    <Button variant="outlined" color="secondary" startIcon={<RemoveShoppingCartIcon />} onClick={() => { { onRemove() }; { handleClick() } }}>Remove</Button>
                </Stack>
                
            </p>
            <Snackbar
                open={open_sbar}
                autoHideDuration={1500}
                onClose={handleClose}
                message="Item removed"
                action={action}
            />
            <Divider variant="middle" />
        </div>
    );
};

export default Exercise;
    