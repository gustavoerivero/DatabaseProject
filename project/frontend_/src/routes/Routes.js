import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import CustomSwitch from './CustomSwitch';
import Home from '../pages/Home';
import AccountOpening from '../pages/AccountOpening';
import AccountForm from '../pages/AccountForm';
import AccountConfirm from '../pages/AccountConfirm';
import NotFound from '../pages/NotFound';
import Theme from '../components/theme/Theme';
import { ThemeProvider } from '@material-ui/core';

export default function App() {
  return (
    <ThemeProvider theme={ Theme }>
      <BrowserRouter>
        <CustomSwitch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/account-opening' component={ AccountOpening } />
          <Route exact path='/account-form' component={ AccountForm } />
          <Route exact path='/account-confirm' component={ AccountConfirm } />
          <Route exact path='/error-404' component={ NotFound } />
          <Redirect from='*' to='/error-404' />
        </CustomSwitch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
