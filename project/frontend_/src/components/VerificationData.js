import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import Form from './Form';
import ReCAPTCHA from 'react-google-recaptcha';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
    },
    container: {
        padding: '2em',
        margin: '1em',
        backgroundColor: '#141414'
    },
    number: {
        paddingBottom: '1em',
    },
}));

export default function VerificationData({ values, handleChange }) {

    const classes = useStyles();

    const [validCaptcha, setValidCaptcha] = useState(null);
    const [validUser, setValidUser] = useState(false);

    const captcha = useRef(null);

    const onChange = () => {
        if(captcha.current.getValue()) {
            setValidCaptcha(true);
            setValidUser(true);
        } 
    }

    const submit = (e) => {
        e.preventDefault();
        if(captcha.current.getValue()) {
            setValidUser(true);
            setValidCaptcha(true);
        } else {
            setValidUser(false);
            setValidCaptcha(false);
        }
    }

    return (
        <form autoComplete='off' onSubmit={ submit }>
            <Form>

                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant='body2' component='h3' >
                            Estimado cliente, es importante verificar que los
                            datos introducidos en el presente formulario sean
                            correctos, para minimizar su tiempo de atención en
                            nuestras oficinas. Adicionalmente, le informamos que
                            posee un tiempo máximo de 30 minutos para llenar y
                            enviar su solicitud. (Esta aplicación está certificada
                            en versiones superiores a Internet Explorer 7.0).
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='body2' component='p' >
                            Para:
                            <li>
                                Solicitar cita.
                            </li>
                            <li>
                                Modificar cita.
                            </li>
                            <li>
                                Reimprimir comprobante de cita.
                            </li>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant='body2' component='p'>
                            Seleccione el tipo de documento e ingrese el número de documento.
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl
                            required
                            variant='filled'
                            className={classes.formControl}
                        >
                            <InputLabel htmlFor='document-type'>Tipo de documento</InputLabel>
                            <Select
                                native
                                value={values.documentType}
                                onChange={handleChange('documentType')}
                                label='Tipo de documento'
                                inputProps={{
                                    name: 'documentType',
                                    id: 'documentType',
                                }}
                            >
                                <option aria-label='none' value='' />
                                <option value={'V'}>V</option>
                                <option value={'E'}>E</option>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl className={classes.formControl}>
                            <TextField
                                label='Número de documento'
                                variant='filled'
                                required
                                onChange={
                                    handleChange('documentNumber')
                                }
                                type='number'
                                helperText={
                                    (values.documentNumber.length < 6 || values.documentNumber.length > 8) && values.documentNumber.length !== 0
                                        ? 'El número de documento debe contener entre 6 a 8 caracteres.' : ''}
                                error={
                                    (values.documentNumber.length < 6 || values.documentNumber.length > 8) && values.documentNumber.length !== 0
                                        ? true : false}
                                defaultValue={values.documentNumber}
                                className={classes.number}
                            />
                        </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container justifyContent='center' alignContent='center'>
                            <Grid item xs={12}>
                                <ReCAPTCHA
                                    ref={ captcha }
                                    sitekey='6LdpdHscAAAAAJD-JlIuUudEh7LQkY6KQtkkkRYx'
                                    theme='dark'
                                    onChange={ onChange }
                                />
                                { validCaptcha === false &&
                                    <div>
                                        <Typography variant='body2' color='error'>
                                            Por favor, acepta el captcha
                                        </Typography>
                                    </div>
                                }
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            disabled={(
                                (values.documentNumber.length < 6 || values.documentNumber.length > 8)
                                    || values.documentType === '' || !validUser
                                    ? true : false)
                            }
                            variant='contained'
                            color='primary'
                            type='onSubmit'
                            component={ Link }
                            to={{
                                pathname: '/account-form',
                                type: values.documentType,
                                number: values.documentNumber
                            }}
                        >
                            Enviar
                        </Button>
                    </Grid>

                </Grid>

            </Form>
        </form>
    )
}
