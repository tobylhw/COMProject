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
import { Password } from '@mui/icons-material';

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

interface User {
    sid: string,
    pw: string,
    prog: string,
    yoe: string
}

export default function ElevateAppBar(props) {

    const [sdata, setsdata] = useState<User>({ sid: '', pw: '', prog: '', yoe: '' });

    function signup() {
        if (sdata.sid && sdata.pw && sdata.prog && sdata.yoe) {
            localStorage.setItem('sdata', JSON.stringify(sdata));
            console.log(sdata)
            alert("Sign up success. Going back to login page")
            window.location.href="/pages/login"
        } else {
            alert("Please fill in all information required")
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        //eslint-disable-next-line no-console
        //console.log({
        //uid: data.get('uid'),
        //password: data.get('password'),
        //});
    };

    return (
        <React.Fragment>

            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            HSU App
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

            <Toolbar />

            <Container>
                <Box sx={{ my: 2 }}>
                    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
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
                                    Sign up
                                </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="sid"
                                                label="Student ID(e.g. s123456)"
                                                name="sid"
                                                onChange={x => setsdata({...sdata, sid:x.target.value})}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="prog"
                                                label="Programme(e.g. AHCC)"
                                                name="prog"
                                                onChange={x => setsdata({ ...sdata, prog: x.target.value })}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="YoE"
                                                label="Year of entrance(e.g. 2020)"
                                                name="YoE"
                                                onChange={x => setsdata({ ...sdata, yoe: x.target.value })}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                name="password"
                                                label="Password"
                                                type="password"
                                                id="password"
                                                onChange={x => setsdata({ ...sdata, pw: x.target.value })}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={signup}
                                    >
                                        Sign Up
                                    </Button>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item>
                                            <Link href="login" variant="body2">
                                                Already have an account? Sign in
                                            </Link>
                                        </Grid>
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