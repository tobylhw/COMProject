import * as React from 'react';
import { useState } from 'react';
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
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//AppBarMenu
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { DrawerListItems } from './drawerlistitem'

//Grid
import { experimentalStyled as styled1 } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

//Card
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

//Snackbar
import Snackbar from '@mui/material/Snackbar';
//import IconButton from '@mui/material/IconButton';
//import CloseIcon from '@mui/icons-material/Close';
//Dialog
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//Stack
import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';
import List from '@mui/material/List';

//Fab
import Fab from '@mui/material/Fab';

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
        id: '1a',
        title: 'Muffin',
        description: 'Chocolate',
        price: 18
    },
    {
        id: '1b',
        title: 'Muffin',
        description: 'Strawberry',
        price: 18
    },
    {
        id: '2',
        title: 'Cinnamon Roll',
        description: '',
        price: 18
    },
    {
        id: '3',
        title: 'Chocolate Croissant',
        description: ' ',
        price: 18
    },
    {
        id: '4',
        title: 'Chef Salad',
        description: '',
        price: 27
    },
    {
        id: '5',
        title: 'Green Salad with Basalmic Vinegar',
        description: ' ',
        price: 27
    },
    {
        id: '6',
        title: 'Toasted Pepperoni & Cheese Panini',
        description: ' ',
        price: 27
    },
    {
        id: '7',
        title: 'Toasted Pastrami Beef & Cheese Panini',
        description: ' ',
        price: 27
    },
    {
        id: '8',
        title: 'Hot Dog',
        description: ' ',
        price: 26
    },
    {
        id: '9',
        title: 'Tuna Mayo Packed Sandwiches',
        description: ' ',
        price: 26
    },
    {
        id: '10',
        title: 'Egg Mayo Packed Sandwiches',
        description: ' ',
        price: 26
    },
    {
        id: '11',
        title: 'Tomato & Cheese Packed Sandwiches',
        description: ' ',
        price: 26
    }
] as const;

interface LineItem {
    item: string;
    item_title: string;
    quantity: number;
    item_price: number;
}

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

    //Cart
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

    //Dialog
    const [open_digDialog, setOpen_digDialog] = React.useState(false);

    const handleClickOpenDialog = () => {
        setOpen_digDialog(true);
    };

    const handleCloseDialog = () => {
        setOpen_digDialog(false);
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

    //CartDialog
    const [openCartDialog, setOpenCartDialog] = React.useState(false);

    const handleClickOpenCartDialog = (scrollType: DialogProps['scroll']) => () => {
        setOpenCartDialog(true);
    };

    const handleCloseCartDialog = () => {
        setOpenCartDialog(false);
    };

    const descriptionElementRefCartDialog = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (openCartDialog) {
            const { current: descriptionElement } = descriptionElementRefCartDialog;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [openCartDialog]);

    //Checkout dialog
    const [openCheckout, setOpenCheckout] = React.useState(false);

    const handleClickOpenCheckout = () => {
        setOpenCheckout(true);
    };

    const handleCloseCheckout = () => {
        setOpenCheckout(false);
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
                            Online Food Ordering
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
                    <Typography sx={{ pl: 2 }} paragraph>
                        <Typography sx={{ p: 1, color: '#096426', fontWeight: 'medium' }}variant="h4" paragraph>
                            A-Cafe Online Ordering
                            {/*<Button startIcon={<ShoppingCartIcon />} variant="outlined" onClick={handleClickOpenCartDialog('paper')}>Cart</Button>*/}
                        </Typography>
                        {shopItems.map(item => (
                            <ShopItem key={item.id} item={item} onAdd={() => addItemToCart(item)} />
                        ))}

                        <Dialog
                            open={openCartDialog}
                            onClose={handleCloseCartDialog}
                            aria-labelledby="scroll-dialog-title"
                            aria-describedby="scroll-dialog-description"
                        >
                            <DialogTitle id="scroll-dialog-title">
                                Cart
                                <IconButton
                                    aria-label="close"
                                    onClick={handleCloseCartDialog}
                                    sx={{
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: (theme) => theme.palette.grey[500],
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>
                            <DialogContent >
                                <DialogContentText
                                    color="normal"
                                    id="scroll-dialog-description"
                                    ref={descriptionElementRefCartDialog}
                                    tabIndex={-1}
                                >
                                    <List sx={{ px: 2 }}>
                                        {cart.map((item, index) => (
                                            <CartItem
                                                key={item.item}
                                                item={item}
                                                onRemove={() => removeItem(index)}
                                                onQuanChange={x => onQuanChange(index, x)}
                                            />
                                        ))}
                                    </List>
                                </DialogContentText>
                                <Divider />
                                <p />
                                <CalSum />
                                <p />
                            </DialogContent>
                            <DialogActions sx={{ justifyContent: 'center' }}>
                                <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={handleClickOpenDialog}>Clear all</Button>
                                <Dialog
                                    open={open_digDialog}
                                    onClose={handleCloseDialog}
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
                                        <Button color="secondary" onClick={ handleCloseDialog }>Cancel</Button>
                                        <Button color="secondary" onClick={() => { { setCart([]) }; { handleCloseDialog() }; { handleClick_sbar() }; { handleCloseCartDialog() } }} autoFocus>
                                            Clear
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <Button variant="contained" onClick={handleClickOpenCheckout} startIcon={<PaymentIcon />} >Checkout</Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog
                            open={openCheckout}
                            onClose={handleCloseCheckout}
                        >
                            <DialogTitle >
                                {"Please get your meal at A-Cafe"}
                            </DialogTitle>

                            <DialogActions>
                                <Button onClick={() => { { handleCloseCheckout() }; { handleCloseDialog() }; { setCart([]) }; { handleCloseCartDialog() } }} autoFocus>
                                    Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <Snackbar
                            open={open_sbar}
                            autoHideDuration={3000}
                            onClose={handleClose_sbar}
                            message="Shopping cart cleared"
                            action={action}
                        />

                    </Typography>
                    <Fab color="primary" onClick={handleClickOpenCartDialog('paper')} aria-label="Cart" sx={{
                        position: 'fixed',
                        bottom: 16,
                        right: 16}}>
                        <ShoppingCartIcon/>
                    </Fab>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

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

            <p />
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