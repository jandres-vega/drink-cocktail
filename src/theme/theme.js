import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#343434',
            light: '#F5F5F5'
        },
        secondary: {
            main: '#622FCF'
        },
        common: {
            green: '#02A337',
            orange: '#E99C2D'
        }
    }
})

export {theme}