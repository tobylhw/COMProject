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

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'COM3102 Group Project'}
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

export default function ElevateAppBar(props) {

    const [sid, setsid] = useState<string>();
    const [pw, setpw] = useState<string>();

    function signup() {
        console.log(sid);
        console.log(pw);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <React.Fragment>
           
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            New accouont page for HSU students
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
                                        {/*<Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="firstName"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="family-name"
                                            />
                                        </Grid>*/}
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="sid"
                                                label="Student ID"
                                                name="sid"
                                                autoComplete="sid"
                                                /*pattern = "[s]{1}[0-9]{6}"*/
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="programme"
                                                label="Programme"
                                                name="programme"
                                                autoComplete="programme"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="ent_year"
                                                label="Year of entrance"
                                                name="ent_year"
                                                autoComplete="ent_year"
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
                                                autoComplete="new-password"
                                                onChange={x => {setpw(x.target.value)}}
                                            />
                                        </Grid>
                                        
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
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
