import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '2em',
        margin: '1em',
        backgroundColor: '#141414'
    },
    title: {
        marginBottom: '.5em',
    },
}));

const Form = ({ children, title }) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Paper elevation={5} className={classes.container}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography
                            component='h3'
                            variant='h5'
                            className={classes.title}
                        >
                            {title}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        {children}
                    </Grid>
                </Grid>
            </Paper>
        </React.Fragment>
    );
};

export default Form;