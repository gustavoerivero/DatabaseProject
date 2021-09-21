import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import accounts from '../static/accounts';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '3em 0em 0em 0em',
    },
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("md")]:{
            flexDirection: 'column',
        }
    },
    title: {
        fontFamily: 'Roboto',
        textAlign: 'center'
    },
}));

export default function AccountTypes() {
    const classes = useStyles();
    const checked = useWindowPosition('header');

    return (
        <div className={ classes.root } id='account-types'>
            <ImageCard account={ accounts[0] } checked={ checked } />
            <ImageCard account={ accounts[1] } checked={ checked } />
        </div>
    )
}
