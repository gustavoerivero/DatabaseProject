import React, { useEffect, useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  ListItem,
  ListItemText,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

import RegExp from '../static/RegExp';

import '../assets/css/index.css';
import '@fontsource/roboto';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  complete: {
    marginTop: '1em',
  },
  leftField: {
    marginTop: '1em',
    [theme.breakpoints.up('sm')]: {
      width: '47%',
      marginRight: '3%',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginRight: '0%',
    },
  },
  rightField: {
    marginTop: '1em',
    [theme.breakpoints.up('sm')]: {
      width: '47%',
      marginLeft: '3%',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginLeft: '0%',
    },
  },
  select: {
    marginTop: '1em',
    [theme.breakpoints.up('sm')]: {
      width: '47%',
      marginRight: '3%',
      marginBottom: '0%',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginRight: '0%',
      marginBottom: '1em',
    },
  },
  foreign: {
    marginTop: '1em',
  },
  subContainer: {
    backgroundColor: '#141414',
  },
  buttons: {
    minWidth: '7em',
    margin: '0em .5em 0em .5em',
  },
}));

export default function AccountForm({ values, handleChange, customer }) {

  const classes = useStyles();

  const [states, setStates] = useState([{
    id: 0,
    name: '',
    status: ''
  }]);

  useEffect(() => {
    if(!values.stateId)
      fetch(`http://localhost:8080/state/get`)
        .then(res => res.json())
        .then((result) => {
          setStates(result);
          console.log('Estados', states);
        })
        .catch((error) => {
          console.log('States -> Error: ', error);
        })
  })

  const [municipalities, setMunicipalities] = useState([{
    id: 0,
    state: {
      id: 0,
      name: '',
      status: ''
    },
    name: '',
    status: ''
  }]);

  useEffect(() => {
    if (values.stateId != '')
      fetch(`http://localhost:8080/municipality/get/state/${Number(values.stateId)}`)
        .then(res => res.json())
        .then((result) => {
          setMunicipalities(result);
          console.log('Municipios: ', municipalities);
        })
        .catch((error) => {
          console.log('Municipalities -> Error: ', error);
        })
  })

  const [offices, setOffices] = useState([{
    id: 0,
    municipality: {
      id: 0,
      state: {
        id: 0,
        name: '',
        status: ''
      },
      name: '',
      status: ''
    },
    code: '',
    name: '',
    address: '',
    phoneNumber: '',
    status: ''
  }]);

  useEffect(() => {
    if (values.municipalityId != '')
      fetch(`http://localhost:8080/office/get/municipality/${Number(values.municipalityId)}`)
        .then(res => res.json())
        .then((result) => {
          setOffices(result);
          console.log(result);
        })
        .catch((error) => {
          console.log('Offices -> Error: ', error);
        })
  })

  useEffect(() => {
    if (values.officeId != '') {
      fetch(`http://localhost:8080/office/get/${Number(values.officeId)}`)
        .then(res => res.json())
        .then((result) => {
          values.officeCode = result.code;
          values.officeName = result.name;
          values.officeAddress = result.address;
          console.log(result);
        })
        .catch((error) => {
          console.log('Office -> Error: ', error);
        })
    }
  })

  return (
    <form autoComplete='off'>
      {console.log(values)}
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Form title="Datos Personales">
            <TextField
              label="Nombre"
              variant="filled"
              placeholder="Ingresa tu nombre"
              required
              className={classes.leftField}
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              helperText={
                RegExp.regLetters.test(values.firstName) ||
                  values.firstName === ''
                  ? ''
                  : 'Debe ingresar un nombre válido.'
              }
              error={
                RegExp.regLetters.test(values.firstName) ||
                  values.firstName === ''
                  ? false
                  : true
              }
            />

            <TextField
              label="Segundo nombre"
              variant="filled"
              placeholder="Ingresa tu segundo nombre"
              className={classes.rightField}
              onChange={handleChange('secondName')}
              defaultValue={values.secondName}
              helperText={
                RegExp.regLetters.test(values.secondName) ||
                  values.secondName === ''
                  ? ''
                  : 'Debe ingresar un nombre válido.'
              }
              error={
                RegExp.regLetters.test(values.secondName) ||
                  values.secondName === ''
                  ? false
                  : true
              }
            />

            <TextField
              label="Apellido"
              variant="filled"
              placeholder="Ingresa tu apellido"
              required
              className={classes.leftField}
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              helperText={
                RegExp.regLetters.test(values.lastName) || 
                  values.lastName === ''
                  ? ''
                  : 'Debe ingresar un apellido válido.'
              }
              error={
                RegExp.regLetters.test(values.lastName) || 
                  values.lastName === ''
                  ? false
                  : true
              }
            />

            <TextField
              label="Segundo apellido"
              variant="filled"
              placeholder="Ingresa tu segundo apellido"
              className={classes.rightField}
              onChange={handleChange('secondLastName')}
              defaultValue={values.secondLastName}
              helperText={
                RegExp.regLetters.test(values.secondLastName) ||
                  values.secondLastName === ''
                  ? ''
                  : 'Debe ingresar un apellido válido.'
              }
              error={
                RegExp.regLetters.test(values.secondLastName) ||
                  values.secondLastName === ''
                  ? false
                  : true
              }
            />

            <TextField
              label="Fecha de nacimiento"
              variant="filled"
              placeholder="Ingresa tu fecha de nacimiento"
              type="date"
              required
              className={classes.leftField}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleChange('birthday')}
              defaultValue={values.birthday}
            />

            <TextField
              label="Correo electrónico"
              variant="filled"
              placeholder="Ingresa tu correo electrónico"
              required
              className={classes.rightField}
              onChange={handleChange('email')}
              defaultValue={values.email}
              type="email"
              helperText={
                RegExp.regEmail.test(values.email) || 
                  values.email === ''
                  ? ''
                  : 'Debe ingresar un correo electrónico.'
              }
              error={
                RegExp.regEmail.test(values.email) || 
                  values.email === ''
                  ? false
                  : true
              }
            />

            <TextField
              label="Dirección"
              variant="filled"
              placeholder="Ingresa la dirección donde vives"
              required
              fullWidth
              className={classes.complete}
              onChange={handleChange('address')}
              defaultValue={values.address}
            />

            <TextField
              label="Teléfono celular"
              variant="filled"
              placeholder="Ingresa número de teléfono"
              required
              className={classes.leftField}
              onChange={handleChange('phoneNumber')}
              defaultValue={values.phoneNumber}
              helperText={
                RegExp.regPhone.test(values.phoneNumber) ||
                  values.phoneNumber === ''
                  ? ''
                  : 'Debe ingresar un número de teléfono válido.'
              }
              error={
                RegExp.regPhone.test(values.phoneNumber) ||
                  values.phoneNumber === ''
                  ? false
                  : true
              }
            />

            <TextField
              label="Teléfono local"
              variant="filled"
              placeholder="Ingresa tu número de teléfono local"
              className={classes.rightField}
              onChange={handleChange('landlineNumber')}
              defaultValue={values.landlineNumber}
              helperText={
                RegExp.regPhone.test(values.landlineNumber) ||
                  values.landlineNumber === ''
                  ? ''
                  : 'Debe ingresar un número de teléfono válido.'
              }
              error={
                RegExp.regPhone.test(values.landlineNumber) ||
                  values.landlineNumber === ''
                  ? false
                  : true
              }
            />
          </Form>
        </Grid>
        <Grid item xs={12}>
          <Form title="Datos de cuenta">
            <FormControl required variant="filled" className={classes.select}>
              <InputLabel htmlFor="account-type">Tipo de cuenta</InputLabel>
              <Select
                native
                value={values.accountType}
                onChange={handleChange('accountType')}
                label="Tipo de cuenta"
                inputProps={{
                  name: 'accountType',
                  id: 'account-type',
                }}
              >
                <option aria-label="none" value="" />
                <option value={0}>Cuenta de ahorro</option>
                <option value={1}>Cuenta corriente</option>
              </Select>
            </FormControl>
          </Form>
        </Grid>
        <Grid item xs={12}>
          <Form title="Datos complementarios">
            <FormControl required variant="filled" className={classes.leftField}>
              <InputLabel htmlFor="estimated-amount">
                Monto estimado de movilización
              </InputLabel>
              <Select
                native
                value={values.estimatedAccount}
                onChange={handleChange('estimatedAccount')}
                label="Monto estimado de movilización de la cuenta"
                inputProps={{
                  name: 'estimatedAmount',
                  id: 'estimated-amount',
                }}
              >
                <option aria-label="none" value="" />
                <option value={0}>Entre 0 y 500</option>
                <option value={1}>Entre 501 y 2.500</option>
                <option value={2}>Entre 2.501 y 10.000</option>
                <option value={3}>Entre 10.001 y 100.000</option>
                <option value={4}>Más de 100.001</option>
              </Select>
            </FormControl>

            <FormControl required variant="filled" className={classes.rightField}>
              <InputLabel htmlFor="average-transactions">
                Promedio transacciones mensual
              </InputLabel>
              <Select
                native
                value={values.averageTransactions}
                onChange={handleChange('averageTransactions')}
                label="Promedio transacciones mensual"
                inputProps={{
                  name: 'averageTransactions',
                  id: 'average-transactions',
                }}
              >
                <option aria-label="none" value="" />
                <option value={0}>Menos de 20</option>
                <option value={1}>Entre 20 y 50</option>
                <option value={2}>Entre 51 y 100</option>
                <option value={3}>Más de 100</option>
              </Select>
            </FormControl>

            <TextField
              label="Origen fondo"
              variant="filled"
              placeholder="Origen fondo"
              required
              className={classes.leftField}
              onChange={handleChange('fundSource')}
              defaultValue={values.fundSource}
            />

            <TextField
              label="Destino fondo"
              variant="filled"
              placeholder="Destino fondo"
              required
              className={classes.rightField}
              onChange={handleChange('fundArrival')}
              defaultValue={values.fundArrival}
            />

            <FormControl component="fieldset" className={classes.foreign}>
              <FormLabel component="legend">
                Necesidad de recibir o enviar regularmente transferencias desde o
                hacia el exterior:
              </FormLabel>
              <RadioGroup
                aria-label="foreign-fund"
                name="foreign-fund1"
                value={values.isNeedForeignUse}
                onChange={handleChange('isNeedForeignUse')}
              >
                <FormControlLabel value="0" control={<Radio />} label="No" />
                <FormControlLabel value="1" control={<Radio />} label="Si" />
              </RadioGroup>
            </FormControl>

            {values.isNeedForeignUse === '1' ? (
              <Paper elevation={0} className={classes.subContainer}>
                <FormControl required variant="filled" className={classes.select}>
                  <InputLabel htmlFor="source-foreign-fund">Origen</InputLabel>
                  <Select
                    native
                    value={values.fundSourceForeignUse}
                    onChange={handleChange('fundSourceForeignUse')}
                    label="Origen"
                    inputProps={{
                      name: 'sourceForeignFund',
                      id: 'source-foreign-fund',
                    }}
                  >
                    <option aria-label="none" value="" />
                    <option value={0}>Interior</option>
                    <option value={1}>Exterior</option>
                  </Select>
                </FormControl>

                <FormControl
                  required
                  variant="filled"
                  className={classes.rightField}
                >
                  <InputLabel htmlFor="arrival-foreign-fund">Destino</InputLabel>
                  <Select
                    native
                    value={values.fundArrivalForeignUse}
                    onChange={handleChange('fundArrivalForeignUse')}
                    label="Destino"
                    inputProps={{
                      name: 'arrivalForeignFund',
                      id: 'arrival-foreign-fund',
                    }}
                  >
                    <option aria-label="none" value="" />
                    <option value={0}>Interior</option>
                    <option value={1}>Exterior</option>
                  </Select>
                </FormControl>
              </Paper>
            ) : (
              ''
            )}
          </Form>
        </Grid>
        <Grid item xs={12}>
          <Form title="Complementario Normativo">
            <FormControl required variant="filled" className={classes.leftField}>
              <InputLabel htmlFor="request-reason">
                Motivo por el que hace la solicitud
              </InputLabel>
              <Select
                native
                value={values.complementReason}
                onChange={handleChange('complementReason')}
                label="Tipo de cuenta"
                inputProps={{
                  name: 'requestReason',
                  id: 'request-reason',
                }}
              >
                <option aria-label="none" value="" />
                <option value={0}>Buen servicio y variedad de productos</option>
                <option value={1}>Cliente tradicional</option>
                <option value={2}>Cuenta de nomina</option>
                <option value={3}>Gestión de funcionario del banco</option>
                <option value={4}>Por estar a nivel nacional</option>
                <option value={5}>Por la solidez / prestigio / seguridad</option>
                <option value={6}>Por los altos intereses</option>
                <option value={7}>Por los premios</option>
                <option value={8}>Publicidad</option>
                <option value={9}>Referencia de un familiar / amigo</option>
              </Select>
            </FormControl>

            <FormControl required variant="filled" className={classes.rightField}>
              <InputLabel htmlFor="dedicated-use">
                Uso dedicado a la cuenta
              </InputLabel>
              <Select
                native
                value={values.accountUse}
                onChange={handleChange('accountUse')}
                label="Monto estimado de movilización de la cuenta"
                inputProps={{
                  name: 'dedicatedUse',
                  id: 'dedicated-use',
                }}
              >
                <option aria-label="none" value="" />
                <option value={0}>Ahorro personal</option>
                <option value={1}>Atender gastos varios / personales</option>
                <option value={2}>Cancelar cuotas de crédito</option>
                <option value={3}>Depósito de las ventas</option>
                <option value={4}>Movilizar fondos de nómina / pensión / fideicomiso</option>
                <option value={5}>Pago de proveedores</option>
                <option value={6}>Particular</option>
                <option value={7}>Recibir depósito de alquileres</option>
                <option value={8}>Recibir intereses de depósitos a plazo</option>
              </Select>
            </FormControl>
          </Form>
        </Grid>
        <Grid item xs={12}>
          <Form title="Agenda">
            <Typography variant="body2">
              ¿Dónde desa entregar los recaudos y establecer la cuenta?
            </Typography>
            <FormControl required variant="filled" className={classes.leftField}>
              <InputLabel htmlFor="office-state">Estado</InputLabel>
              <Select
                native
                value={values.stateId}
                onChange={handleChange('stateId')}
                label="Estado"
                inputProps={{
                  name: 'officeState',
                  id: 'office-state',
                }}
              >
                <option aria-label="none" value="" />
                {states.map((state) => {
                  return (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl required variant="filled" className={classes.rightField}>
              <InputLabel htmlFor="office-municipality">Municipio</InputLabel>
              <Select
                native
                value={values.municipalityId}
                onChange={handleChange('municipalityId')}
                label="Municipio"
                inputProps={{
                  name: 'officeMunicipality',
                  id: 'office-municipality',
                }}
              >
                <option aria-label="none" value="" />
                {municipalities.map((municipality) => {
                    return (
                      <option key={municipality.id} value={municipality.id}>
                        {municipality.name}
                      </option>
                    );
                  })
                }
              </Select>
            </FormControl>

            <FormControl required variant="filled" className={classes.select}>
              <InputLabel htmlFor="agency">Agencia</InputLabel>
              <Select
                native
                value={values.officeId}
                onChange={handleChange('officeId')}
                label="Agencia"
                inputProps={{
                  name: 'agency',
                  id: 'agency',
                }}
              >
                <option aria-label="none" value="" />
                {offices.map((office) => {
                    return (
                      <option key={office.id} value={office.id}>
                        {office.name}
                      </option>
                    );
                  })
                }
              </Select>
            </FormControl>
            <ListItem className={classes.complete}>
              <ListItemText
                primary="Dirección de la agencia"
                secondary={ values.officeAddress }
              />
            </ListItem>
          </Form>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={2}
            alignContent="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={3} md={2}>
              <Button
                variant="outlined"
                color="default"
                href="/account-opening"
                className={classes.buttons}
              >
                Atrás
              </Button>
            </Grid>

            <Grid item xs={12} sm={3} md={2}>
              <Button
                variant="contained"
                color="secondary"
                type="reset"
                className={classes.buttons}
              >
                Reiniciar
              </Button>
            </Grid>

            <Grid item xs={12} sm={3} md={2}>
              <Button
                disabled={
                  RegExp.regLetters.test(values.firstName) &&
                    values.firstName !== '' &&
                    RegExp.regLetters.test(values.lastName) &&
                    values.lastName !== '' &&
                    RegExp.regEmail.test(values.email) &&
                    values.email !== '' &&
                    RegExp.regPhone.test(values.phoneNumber) &&
                    values.phoneNumber !== '' &&
                    RegExp.regPhone.test(values.landlineNumber) &&
                    values.accountType !== '' &&
                    values.estimatedAccount !== '' &&
                    values.averageTransactions !== '' &&
                    values.sourceFund !== '' &&
                    values.arrivalFund !== '' &&
                    (values.foreignFund !== '1' ||
                      (values.sourceForeignFund !== '' &&
                        values.arrivalForeignFund !== '')) &&
                    values.requestReason !== '' &&
                    values.dedicatedUse !== '' &&
                    values.officeState !== '' &&
                    values.officeMunicipality !== '' &&
                    values.agency !== ''
                    ? false
                    : true
                }
                variant="contained"
                color="primary"
                type="onSubmit"
                component={Link}
                to={{
                  pathname: '/account-confirm',
                  values: values,
                }}
                className={classes.buttons}
              >
                Finalizar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}