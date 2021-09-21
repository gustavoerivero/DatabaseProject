import React from 'react';
import {
    Box,
    Container,
    Grid,
    IconButton,
    Link,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Twitter from '../assets/icons/twitter.png';
import Github from '../assets/icons/github.png';
import Instagram from '../assets/icons/instagram.png';

const useStyles = makeStyles((theme) => ({
    container: {
        fontFamily: 'Roboto',
    },
    appbarTitle: {
        flexGrow: '1',
        fontFamily: 'Nunito',
    },
    colorText:{
        color: theme.palette.text.secondary,
        opacity: 1,
    },
    team: {
        color: theme.palette.text.secondary,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '1rem'
    },
    slogan: {
        color: theme.palette.text.secondary,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
    },
    firstLink: {
        color: theme.palette.text.secondary,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '1rem',
        "&:hover": {
            color: '#FFFFFF',
        },
        paddingRight: '1em',
    },
    lastLink: {
        color: theme.palette.text.secondary,
        fontFamily: 'Nunito',
        fontWeight: 'bold',
        fontSize: '1rem',
        "&:hover": {
            color: '#FFFFFF',
        },
    }
}));

export default function Footer(){

    const classes = useStyles();

    return (
        <footer>
            <Box
                px={{ xs: 1, sm: 5 }}
                py={{ xs: 1, sm: 5 }}
                bgcolor='background.paper'
                color='text.primary'
                className={ classes.container }
            >
                <Container maxWidth='lg'>
                    <Grid container spacing={ 2 } >
                        <Grid item xs={ 12 } sm={ 12 } md={ 9 } >
                            <h1 className={ classes.appbarTitle } >
                                Flame<span className={ classes.colorText }>Bank</span>
                            </h1>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 12 } md={ 3 }>
                            <IconButton href='/'>
                                <img src={ Twitter } alt='' />
                            </IconButton>
                            <IconButton href='https://github.com/gustavoerivero/Database-Project-Frontend/'>
                                <img src={ Github } alt='' />
                            </IconButton>
                            <IconButton href='/'>
                                <img src={ Instagram } alt='' />
                            </IconButton>
                        </Grid>
                        <Grid item xs={ 12} >
                            <Link
                                href='/'
                                color='inherit'
                                className={ classes.firstLink }
                                underline='none'
                            >
                                Inicio
                            </Link>
                            <Link
                                href='/account-opening'
                                color='inherit'
                                className={ classes.firstLink }
                                underline='none'
                            >
                                Apertura de Cuenta Personal
                            </Link>
                            <Link
                                href='/'
                                color='inherit'
                                className={ classes.lastLink }
                                underline='none'
                            >
                                Créditos
                            </Link>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 12 } md={ 9 }>
                            <p>
                                &#169; 2021 | Equipo <span className={ classes.team }>Polaris</span>.
                            </p>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 12 } md={ 3 } >
                            <Typography
                                variant='body2'
                                className={ classes.slogan }
                            >
                                Abriendo caminos hacia el futuro.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}