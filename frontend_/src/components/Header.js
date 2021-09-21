import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, IconButton } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: theme.palette.text.primary,
        fontSize: '4.5rem',
    },
    colorText:{
        color: theme.palette.text.secondary,
        opacity: 1,
    },
    goDown: {
        color: theme.palette.text.secondary,
        fontSize: '4rem',
    }
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, [])

    return(
        <div className={ classes.root } id='header'>
            <Collapse 
                in={ checked }
                { ... (true ? { timeout: 1000 } : {} ) }
                collapsedHeight={ 50 }
            >
                <div className={ classes.container }>
                    <h1 className={ classes.title }>
                        Bienvenido a <br />
                        <span className={ classes.colorText }>Flame</span>Bank
                    </h1>
                    <Scroll 
                        to='account-types'
                        smooth={ true }
                    >
                        <IconButton>
                            <ExpandMoreIcon className={ classes.goDown } />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
};