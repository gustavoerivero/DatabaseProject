import React, { useEffect, useState } from 'react';
import { CssBaseline, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AccountForm from '../components/AccountForm';

import '../assets/css/index.css';
import '@fontsource/roboto';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/city.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    divisor: {
        minHeight: '5em',
    },
}));

export default function Account({ location }) {

    const classes = useStyles();

    const [values, setValues] = useState({

        // Document Values
        documentType: location.type,
        documentNumber: location.number,

        // Customer Values
        firstName: '',
        secondName: '',
        lastName: '',
        secondLastName: '',
        birthday: '',
        email: '',
        address: '',
        phoneNumber: '',
        landlineNumber: '',

        // Account Values
        accountNumber: 0,
        accountType: '',

        // Request Values
        sourceFund: '',
        arrivalFund: '',
        estimatedAccount: '',
        averageTransactions: '',

        // Complement Values
        requestReason: '',
        dedicatedUse: '',

        // ForeignUse Values
        isNeedForeignUse: '0',
        sourceForeignFund: '0',
        arrivalForeignFund: '0',

        // Voucher Values
        voucherNumber: 0,
        voucherDate: new Date(),

        // State Values
        stateId: '',

        // Municipality Values
        municipalityId: '',

        // Office Values
        officeId: '',
        officeCode: '',
        officeName: '',
        officeAddress: ''

    });

    const handleChange = (input) => (e) => {
        setValues({ ...values, [input]: e.target.value });
    };

    const anotherHandle = (input, value) => {
        setValues({ ...values, [input]: value });
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <div className={classes.divisor}></div>
            <Paper>
                <Grid container spacing={1}>
                    <AccountForm
                        values={values}
                        handleChange={handleChange}
                        anotherHandle={anotherHandle}
                    />
                </Grid>
            </Paper>
            <Footer />
        </div>
    );
}