import * as React from 'react';
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
//Dialog
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//Tabs
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'COM3102 Group 11'}
        </Typography>
    );
}

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

//Tabs
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

interface sinput {
    sid: string,
    pw: string
}

interface pinput {
    em: string,
    pw: string
}

export default function ElevateAppBar(props) {

    const [sinput, setsinput] = useState<sinput>({ sid: '', pw: '' });
    const [pinput, setpinput] = useState<pinput>({ em: '', pw: '' });

    function login() {
        const obj = localStorage.getItem('sdata');
        let sread = JSON.parse(obj) as sinput;
        const obj2 = localStorage.getItem('pdata');
        let pread = JSON.parse(obj2) as pinput;
        console.log(sinput)
        console.log(sread)
        console.log(pinput)
        console.log(pread)
        if ((sread.sid === sinput.sid && sread.pw === sinput.pw) || (pread.em === pinput.em && pread.pw === pinput.pw)) {
            console.log("login success")
            window.location.href = "/pages/homepage"
        } else {
            alert("Incorrect sid/email or password")
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        //console.log({
            //email: data.get('email'),
            //password: data.get('password'),
        //});
    };

    //Dialog
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    //Dialog for forget pw
    const [openDialogfgpw, setOpenDialogfgpw] = React.useState(false);

    const handleClickOpenDialogfgpw = () => {
        setOpenDialogfgpw(true);
    };

    const handleCloseDialogfgpw = () => {
        setOpenDialogfgpw(false);
    };

    //Tabs
    const [valueTab, setValueTab] = React.useState(0);

    const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
        setValueTab(newValue);
    };


    return (
        <React.Fragment>
           
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            Login page with scroll to Elevate App Bar
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

            <Toolbar />

            <Container>
                <Box sx={{ my: 2 }}>
                    <Container component="main" maxWidth="xs" sx={{ mb: 4 }}>
                        <Paper variant="outlined" sx={{ my: { xs: 10, md: 13 }, p: { xs: 2, md: 3 } }}>
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>


                                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                        <Tabs value={valueTab} onChange={handleChangeTab} aria-label="basic tabs example" centered>
                                            <Tab label="hsu students" {...a11yProps(0)} />
                                            <Tab label="public" {...a11yProps(1)} />
                                        </Tabs>
                                    </Box>
                                    <TabPanel value={valueTab} index={0}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="sid"
                                            label="Student ID"
                                            name="sid"
                                            autoComplete="sid"
                                            autoFocus
                                            onChange={x => setsinput({ ...sinput, sid: x.target.value })}
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            onChange={x => setsinput({ ...sinput, pw: x.target.value })}
                                        />

                                    </TabPanel>
                                    <TabPanel value={valueTab} index={1}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                            onChange={x => setpinput({ ...pinput, em: x.target.value })}
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            onChange={x => setpinput({ ...pinput, pw: x.target.value })}
                                        />

                                    </TabPanel>


                                    


                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={login}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link onClick={handleClickOpenDialogfgpw} href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>

                                        <Dialog
                                            open={openDialogfgpw}
                                            onClose={handleCloseDialogfgpw}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                {"Forgot password"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    Please contact ITSC
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>

                                                <Button onClick={handleCloseDialogfgpw} autoFocus>
                                                    Close
                                                </Button>
                                            </DialogActions>
                                        </Dialog>

                                        <Grid item>
                                            <Link onClick={handleClickOpenDialog} href="#" variant="body2">
                                                {"Don't have an account? Sign Up"}
                                            </Link>
                                        </Grid>

                                        <Dialog
                                            open={openDialog}
                                            onClose={handleCloseDialog}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                {'Are you an HSU student?'}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    We request different personal information for HSU students
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button href="newUser_public" onClick={handleCloseDialog}>No</Button>
                                                <Button href="newUser_hsu" onClick={handleCloseDialog} autoFocus>Yes</Button>
                                            </DialogActions>
                                        </Dialog>

                                    </Grid>
                                </Box>
                            </Box>
                        </Paper>
                        <Copyright />
                    </Container>
                </Box>
            </Container>
        </React.Fragment>
    );
}
