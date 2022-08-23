import { createTheme } from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: '#FEAA7B',
            light: '#1ADDFF',
            dark: '#58595B'
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
            },
        }
    }
})

export default theme;