import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const maintheme = createTheme({
    palette: {
        primary: {
            main: '#28a745',
        },
        secondary: {
            main:'#9a6325'
        },
        info: {
            main: '#096426'
        }
    }
});
