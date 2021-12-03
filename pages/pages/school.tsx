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

//AppBarMenu
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { DrawerListItems } from './drawerlistitem'

//Timeline
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

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
                            School Info
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
                    <Box sx={{ my: 2}}>
                        <Box sx={{ p: 1 }}>
                            <Typography variant="h4" sx={{ color: '#096426', fontWeight: 'bold'}} paragraph>
                                About HSUHK
                            </Typography>
                            <Typography sx={{ my: 1.5 }} variant="body1">
                                The Hang Seng University of Hong Kong (HSUHK) is a non-profit private liberal-arts-oriented university in Hong Kong, offering a wide range of undergraduate and taught postgraduate degree programmes.
                            </Typography>
                            <Typography sx={{ my: 3, color: '#096426' }} variant="h5" >
                                Overview of HSUHK
                            </Typography>
                            <Typography sx={{ my: 1.5 }} variant="body1">
                                HSUHK, formerly known as Hang Seng Management College and Hang Seng School of Commerce, is a degree-granting institution since 2010. It officially became a private university with the approval from Hong Kong SAR Government in October 2018.
                            </Typography>
                            <Typography sx={{ my: 5, color: '#096426' }} variant="h5" >
                                Milestone of Hang Seng Management College / Hang Seng School of Commerce
                            </Typography>
                            <Box sx={{ maxWidth: 1000 }}>
                                <Timeline position="alternate">
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            1963
                                        </TimelineOppositeContent>
                                        <TimelineSeparator  >
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }} />
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                                            Hang Seng Bank organised Elementary Banking Programme which led Dr S
                                            H Ho to launch a much more ambitious project Hang Seng School of
                                            Commerce (HSSC)
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            1969
                                        </TimelineOppositeContent>
                                        <TimelineSeparator >
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }} />
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                                            HSSC was designed as a non-profit-making co educational institution
                                            offering full-time training at post-Form 5 level
                                        </TimelineContent>
                                    </TimelineItem>


                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            1980
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>HSSC registered under Education Department and Classes. commenced in October with an enrolment of 210 first-year students
                                        </TimelineContent>
                                    </TimelineItem>

                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            1990
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>The 10th anniversary celebration of HSSC was officiated by his Excellency the Governor, Sir David Wilson
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            2001
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>Certificate of "Outstanding School Awards" was awarded to HSSC by the Quality Education Fund
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            2003
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>Associate in Business Administration Programme was launched
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            2005
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>Pre-Associate in Business Administration Programme was launched
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            2008
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>Building Block N was completed
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            2010
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>Hang Seng Management College (HSMC) was established and registered under the Post-Secondary Colleges Ordinance (Cap 320) and launched:<br />
                                            - Bachelor of Business Administration (Honours)<br />
                                            - Bachelor of Business Administration (Honours) in Supply Chain Management<br />
                                            - Bachelor of Translation with Business (Honours) Degree programmes
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            2011
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>HSMC acquired new site area for campus expansion<br />
                                            Bachelor of Journalism and Communication (Honours) Programme was launched</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            2012
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>Bachelor of Arts in English (Honours) Programme was launched
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            2013
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>New buildings were opened sequentially
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            2014
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>HSMC Jockey Club Residential Colleges. Groundbreaking Ceremony<br />
                                            Five Degree Programmes were launched in Academic Year 2014/15:<br />
                                            - Bachelor of Business Administration (Honours) in Corporate Governance<br />
                                            - Bachelor of Business Administration (Honours) in Financial Analysis<br />
                                            - Bachelor of Business Administration (Honours) in Management<br />
                                            - Bachelor of Management Science and Information Management (Honours)<br />
                                            - Bachelor of Science (Honours) in Data Science and Business Intelligence
                                        </TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            2015
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>
                                            HSMC Founders' Day Dinner<br />
                                            HSMC Jockey Club Residential Colleges will be completed</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineOppositeContent sx={{ m: 'auto 0' }} color="text.secondary">
                                            2017
                                        </TimelineOppositeContent>
                                        <TimelineSeparator>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineDot sx={{ bgcolor: 'secondary.main' }}/>
                                            <TimelineConnector sx={{ bgcolor: 'secondary.main' }}/>
                                        </TimelineSeparator>
                                        <TimelineContent sx={{ py: '12px', px: 2, m: 'auto 0' }}>HSMC will apply for the status of University
                                        </TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                            </Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
