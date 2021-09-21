import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Button,
    MobileStepper,
    Paper,
    Typography
} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '70vw',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: '10vh',
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    marginTop: '1em',
  },
  img: {
    height: '60vh',
    display: 'block',
    maxWidth: '100wh',
    overflow: 'hidden',
    width: '100%',
  },
}));

export default function Carousel( props ) {

  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.items.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root} id='carousel'>
      <Typography
        variant='h4'
        component='h3'
      >
        { props.title }
      </Typography>
        <Paper elevation={ 5 } className={ classes.header }>
            <Typography>
                {props.items[activeStep].label}
            </Typography>
        </Paper>
        <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
        >
            { props.items.map((step, index) => (
                <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <img className={classes.img} src={step.imgPath} alt={step.label} />
                    ) : null}
                </div>
            )) }
        </AutoPlaySwipeableViews>
        <MobileStepper
            steps={ maxSteps }
            position="static"
            variant="text"
            activeStep={ activeStep }
            nextButton={
            <Button size="small" onClick={ handleNext } disabled={ activeStep === maxSteps - 1 }>
                Siguiente
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Anterior
            </Button>
            }
        />
    </div>
  );
}
