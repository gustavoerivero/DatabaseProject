import React from 'react';
import { 
  makeStyles 
} from '@material-ui/core/styles';
import { 
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: '30em',
    background: 'background.paper',
    margin: '2em',
  },
  media: {
    height: '20em',
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: 'text.primary',
  },
  description: {
    fontFamily: 'Nunito',
    fontSize: '1rem',
    color: '#ddd',
  },
  buttons: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: '1em',
  },
});

export default function ImageCard({ account, checked, link }) {
  const classes = useStyles();

  return (
    <Collapse
      in={ checked }
      { ... (true ? { timeout: 1500 } : {} ) }
    >
      <Card className={classes.root} elevation={ 24 } >
          <CardMedia
            className={classes.media}
            image={ account.imageUrl }
            title={ account.title }
          />
          <CardContent>
              <Typography 
                gutterBottom 
                variant="h5" 
                component="h2"
                className={ classes.title }
              >
                { account.title }
              </Typography>
              <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p"
                className={ classes.description }
              >
                { account.description }
              </Typography>
          </CardContent>
          <CardActions className={ classes.buttons }>
            <Button
              variant='contained'
              color='primary'
              href={ account.link }
            >
              Solicitar
            </Button>
          </CardActions>
      </Card>
    </Collapse>
  );
}
