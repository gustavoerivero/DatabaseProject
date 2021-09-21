import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Paper } from '@material-ui/core';
import VerificationData from '../components/VerificationData';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import '../assets/css/index.css';
import 'fontsource-roboto';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundSize: 'cover',
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        margin: '0 auto',
    },
    container: {
        margin: '6em 1em 1em 1em',
        paddingTop: '1em',
    },
    gridContainer: {
        padding: '3em',
    },
    subContainer: {
        padding: '2em',
        margin: '1em',
        backgroundColor: '#141414'
    },
}));

export default function AccountOpening() {

    const classes = useStyles();

    const [documentValues, setDocumentValues] = useState({
        documentType: '',
        documentNumber: ''
    });
    
    const handleChange = (input) => (e) => {
        setDocumentValues({ ...documentValues, [input]: e.target.value });
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <Paper elevation={5} className={ classes.container } color='background.default'>
                <Grid
                    container
                    spacing={2}
                    className={ classes.gridContainer }
                >
                    <Grid item xs={12}>
                        <Paper elevation={5} className={ classes.subContainer }>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <VerificationData 
                                        values={ documentValues }
                                        handleChange={ handleChange }
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
            <Footer />
        </div>
    );
}