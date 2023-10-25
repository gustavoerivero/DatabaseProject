import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Grid, Paper } from '@material-ui/core';

import Confirm from '../components/Confirm';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import '../assets/css/index.css';
import '@fontsource/roboto';

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
    }
}));

const convertDate = (date = new Date()) => {
    return (date.getMonth() + 1).toString() + date.getDate().toString() + date.getFullYear().toString();
}

export default function AccountConfirm({ location }) {

    const classes = useStyles();

    const [accountValues, setAccountValues] = useState({

        // Pre-inscription
        documentType: location.values.documentType,
        documentNumber: location.values.documentNumber,

        // First Step
        firstName: location.values.firstName,
        secondName: location.values.secondName,
        lastName: location.values.lastName,
        secondLastName: location.values.secondLastName,
        birthday: location.values.birthday,
        email: location.values.email,
        userAddress: location.values.address,
        phoneNumber: location.values.phoneNumber,
        landlineNumber: location.values.landlineNumber,

        // Second Step
        accountNumber: location.values.documentNumber + convertDate() + location.values.officeId ?? 0,
        accountType: location.values.accountType,
        estimatedAccount: location.values.estimatedAccount,
        averageTransactions: location.values.averageTransactions,
        isNeedForeignUse: location.values.isNeedForeignUse,
        sourceFund: location.values.sourceFund,
        arrivalFund: location.values.arrivalFund,
        foreignFund: location.values.foreignFund,
        sourceForeignFund: location.values.sourceForeignFund,
        arrivalForeignFund: location.values.arrivalForeignFund,

        // Third Step
        requestReason: location.values.requestReason,
        dedicatedUse: location.values.dedicatedUse,
        officeState: location.values.stateId,
        officeMunicipality: location.values.municipalityId,
        agency: location.values.officeName,
        agencyAddress: location.values.officeAddress,

        // Last Step
        voucherNumber: Number(convertDate(new Date()) + location.values.documentNumber + location.values.officeId),
        voucherDate: new Date(),
        officeCode: location.values.officeCode,
        officeId: location.values.officeId

    });

    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <Paper elevation={5} className={classes.container} color='background.default'>
                <Grid
                    container
                    spacing={2}
                    className={classes.gridContainer}
                >
                    <Grid item xs={12}>
                        <Confirm
                            values={accountValues}
                        />
                    </Grid>
                </Grid>
            </Paper>
            <Footer />
        </div>
    );
}

