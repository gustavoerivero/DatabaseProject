import React from 'react';
import {
  CssBaseline,
  Grid,
  Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import { items } from '../static/carouselItems';
import AccountTypes from '../components/AccountTypes';
import Footer from '../components/Footer';

import useWindowPosition from '../hook/useWindowPosition';

import '../assets/css/index.css';
import '@fontsource/roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/city.jpg"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  carousel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
}));

export default function Home() {

  const checked = useWindowPosition('header');
  const classes = useStyles();

  return (
    <div className={ classes.root }>
      <CssBaseline />
      <NavBar />
      <Header />
      <div className={ classes.padding }></div>
      <Paper className={ classes.container }>
        <Grid container spacing={ 1 }>
          <Grid item xs={ 12 }>
            <div className={ classes.carousel }>
              <Carousel 
                title='Novedades'
                items={ items }
                checked={ checked }
              />
            </div>
          </Grid>
        </Grid>
      </Paper>
      <AccountTypes />
      <Footer />
    </div>
  );
}

