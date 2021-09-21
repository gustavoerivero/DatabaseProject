import React from 'react';
import jsPDF from 'jspdf';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Grid,
    ListItem,
    ListItemText,
    Paper,
    Typography
} from '@material-ui/core';
import Form from './Form';

const parseDate = (date) => {
    return date.getDate().toString() + '/' + (date.getMonth() + 1).toString() + '/' + date.getFullYear().toString();
}

const Confirm = ({ values }) => {
    
  const POST = () => {
   
    // Document POST
    const document = {
      type: values.documentType,
      number: values.documentNumber,
    };
    console.log('Document will be added...', document);
    fetch(`http://localhost:8080/document/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(document)
    }).then(() => {
      console.log('Is added the document: ', document);
    }).catch((error) => {
      console.log('Document -> Error: ', error);
    })

    // Customer POST
    const customer = {
      firstName: values.firstName,
      secondName: values.secondName,
      lastName: values.lastName,
      secondLastName: values.secondLastName,
      address: values.address,
      phoneNumber: values.phoneNumber,
      landlineNumber: values.landlineNumber,
      email: values.email,
      birthday: values.birthday,
    };
    console.log('Customer will be added...', customer);
    fetch(`http://localhost:8080/customer/create/${document.number}`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(customer)
    }).then(() => {
      console.log('Is added the customer: ', customer);
    }).catch((error) => {
      console.log('Customer -> Error: ', error);
    })

    // Account POST
    const account = {
      number: values.accountNumber,
      type: values.accountType,
    }
    console.log('Account will be added...', account);
    fetch(`http://localhost:8080/account/create/${document.number}`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(account)
    }).then(() => {
      console.log('Is added the account: ', account);
    }).catch((error) => {
      console.log('Account -> Error: ', error);
    })

    // Request POST
    const request = {
      fundSource: values.fundSource,
      fundArrival: values.fundArrival,
      estimatedAmount: values.estimatedAccount,
      averageTransactions: values.averageTransactions,
    }
    console.log('Request will be added...', request);
    fetch(`http://localhost:8080/request/create/${values.accountNumber}/${values.officeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(request)
    }).then(() => {
      console.log('Is added the request: ', request);
    }).catch((error) => {
      console.log('Request -> Error: ', error);
    })

    // Complement POST
    const complement = {
      reason: values.complementReason,
      accountUse: values.accountUse,
    }
    console.log('Complement will be added...', complement);
    fetch(`http://localhost:8080/complement/create/number/${values.accountNumber}`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(complement)
    }).then(() => {
      console.log('Is added the complement: ', complement);
    }).catch((error) => {
      console.log('Complement -> Error: ', error);
    })

    // ForeignUse POST
    const foreignUse = {
      isNeed: values.isNeedForeignUse,
      source: values.fundSourceForeignUse,
      arrival: values.fundArrivalForeignUse,
    }
    console.log('ForeignUse will be added...', foreignUse);
    fetch(`http://localhost:8080/foreignUse/create/number/${values.accountNumber}`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(foreignUse)
    }).then(() => {
      console.log('Is added the foreignUse: ', foreignUse);
    }).catch((error) => {
      console.log('ForeignUse -> Error: ', error);
    })

    // Voucher POST
    const voucher = {
      voucherNumber: values.voucherNumber,
      date: voucherDate,
    }
    console.log('Voucher will be added...', voucher);
    fetch(`http://localhost:8080/voucher/create/number/${values.accountNumber}`, {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(voucher)
    }).then(() => {
      console.log('Is added the voucher: ', voucher);
    }).catch((error) => {
      console.log('Voucher -> Error: ', error);
    })

  }

    const generatePDF = () => {

        POST();

        var doc = new jsPDF();
    
        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.text(`Comprobante N°: ${values.voucherNumber}`, 20, 20);
    
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text("Nombres y apellidos:", 20, 30);
    
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.text(`${values.firstName + ' ' + values.secondName + ' ' + values.lastName + ' ' + values.secondLastName}`, 20, 35);
    
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text("Tipo-Número Documento:", 120, 30);
    
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.text(`${values.documentType + '-' + values.documentNumber}`, 120, 35);
    
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text("Fecha del comprobante:", 20, 45);
    
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.text(`${parseDate(values.voucherDate)}`, 20, 50);
    
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text("Tipo de cuenta:", 120, 45);
    
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.text(`${values.accountType === '0' ? 'Ahorro' : 'Corriente'}`, 120, 50);
    
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text("Oficina:", 20, 60);
    
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.text(`${values.officeName}`, 20, 65);
    
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text("Código de oficina:", 120, 60);
    
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.text(`${values.officeCode}`, 120, 65);
    
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text("Dirección de Oficina:", 20, 75);
    
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.text(`${values.officeAddress}`, 20, 80);
    
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.text("NOTA: Usted posee 15 días hábiles para formalizar su solicitud en la oficina bancaria", 30, 100);
        doc.text("señalada. Recuerde consignar este comprobante junto a los recaudos al momento de", 30, 105);
        doc.text("abrir su cuenta.", 30, 110);
    
        doc.line(10, 120, 200, 120);
    
        doc.setFontSize(13);
        doc.setFont("helvetica", "bold");
        doc.text("FlameBank", 90, 130);
    
        doc.setFontSize(13);
        doc.setFont("helvetica", "normal");
        doc.text("Abriendo caminos hacia el futuro.", 70, 135);
    
        doc.line(10, 260, 200, 260);
    
        doc.setFontSize(8);
        doc.setFont("helvetica", "normal");
        doc.text("Equipo Polaris", 10, 265);
    
        doc.save(`voucher_${values.voucherNumber}.pdf`)
    
    }

    // Styles
    const styles = makeStyles((theme) => ({
        leftField: {
            marginTop: '1em',
            [theme.breakpoints.up('sm')]: {
                width: '47%',
                marginRight: '3%'
            },
            [theme.breakpoints.down('md')]: {
                width: '100%',
                marginRight: '0%'
            },
        },
        rightField: {
            marginTop: '1em',
            [theme.breakpoints.up('sm')]: {
                width: '47%',
                marginLeft: '3%'
            },
            [theme.breakpoints.down('md')]: {
                width: '100%',
                marginLeft: '0%'
            },
        },
        container: {
            padding: '2em',
            margin: '1em',
            backgroundColor: '#141414'
        },
        buttons: {
            minWidth: '7em',
            margin: '0em .5em 0em .5em',
        }
    }));

    const classes = styles();

    console.log(values);

    // Rendering
    return (
        <form autoComplete='off'>
            <Paper elevation={5} className={classes.container}>

                <Form title='Confirma la información ingresada'>

                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <Typography variant='h6' className={classes.voucher}>
                                Comprobante N° {values.voucherNumber}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={9} md={9} lg={6} xl={3}>
                            <ListItem className={classes.element}>
                                <ListItemText
                                    primary='Nombres y apellidos'
                                    secondary={
                                        values.firstName + ' '
                                        + values.secondName + ' ' +
                                        values.lastName + ' ' +
                                        values.secondLastName}
                                />
                            </ListItem>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                            <ListItem className={classes.element}>
                                <ListItemText
                                    primary='Tipo-Número de documento'
                                    secondary={values.documentType + '-' + values.documentNumber}
                                />
                            </ListItem>
                        </Grid>

                        <Grid item xs={12} sm={5} md={3} lg={3} xl={3}>
                            <ListItem className={classes.element}>
                                <ListItemText
                                    primary='Fecha del comprobante'
                                    secondary={parseDate(values.voucherDate)}
                                />
                            </ListItem>
                        </Grid>

                        <Grid item xs={12} sm={9} md={6} lg={6} xl={3}>
                            <ListItem className={classes.element}>
                                <ListItemText
                                    primary='Tipo de cuenta'
                                    secondary={(values.accountType === '0' ? 'Ahorro' : 'Corriente')}
                                />
                            </ListItem>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                            <ListItem>
                                <ListItemText
                                    primary='Oficina'
                                    secondary={values.officeName}
                                />
                            </ListItem>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                            <ListItem>
                                <ListItemText
                                    primary='Código de oficina'
                                    secondary={values.officeCode}
                                />
                            </ListItem>
                        </Grid>

                        <Grid item xs={12}>
                            <ListItem>
                                <ListItemText
                                    primary='Dirección de oficina'
                                    secondary={values.officeAddress}
                                />
                            </ListItem>
                        </Grid>
                        <Grid item xs={12}>

                            <Typography className={classes.note} variant='body2' component='p' >
                                NOTA: Usted posee 15 días hábiles para formalizar su
                                solicitud en la oficina bancaria señalada. Recuerde
                                consignar este comprobante junto a los recaudos al
                                momento de abrir su cuenta.
                            </Typography>

                        </Grid>

                        <Grid item xs={12}>

                            <Grid
                                container
                                spacing={2}
                                alignContent='center'
                                justify='center'
                            >

                                <Grid item xs={12} sm={3} md={2}>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        className={classes.buttons}
                                        onClick={generatePDF}
                                    >
                                        Imprimir
                                    </Button>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>

                </Form>
            </Paper>
        </form >
    );
};

export default Confirm;