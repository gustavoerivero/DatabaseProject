import { 
    createTheme 
} from '@material-ui/core'
import { 
    blue,
    purple 
} from '@material-ui/core/colors';

const Theme = createTheme({
    overrides: {
        MuiCssBaseline: {
                "@global": {
                    body: {
                        scrollbarColor: "#6b6b6b #2b2b2b",
                            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                                backgroundColor: "rgba(0,0,0,0.95)",
                            },
                            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                                borderRadius: 8,
                                backgroundColor: "#6b6b6b",
                                minHeight: 10,
                                border: "2px solid #2b2b2b",
                            },
                            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                                backgroundColor: "rgba(0,0,0,0.6)",
                            },
                            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                                backgroundColor: "#959595",
                            },
                            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                                backgroundColor: "#959595",
                            },
                            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                                backgroundColor: "#2b2b2b",
                            },
                    },
                },
            },
    },
    palette: {
        primary: {
            light: blue[500],
            main: blue[600],
            dark: blue[900]
        },
        secondary: {
            light: purple[700],
            main: purple[800],
            dark: purple[900]
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#A61EFF',
            disabled: '#312640',
            hint: '#D7B1FF',
            icon: '#A61EFF'
        },
        background: {
            paper: 'rgba(0,0,0,0.95)',
            default: '#0B0B0B'
        }
    },
});

export default Theme;