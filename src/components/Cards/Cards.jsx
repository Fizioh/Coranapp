import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css';

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'Loading...';
    }


    return (
      <div className={styles.container}>
          <Grid container spacing={3} justify="center">

               {/*------- CARD #1 -------*/}
            <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography  varaint="h5">{confirmed.value}</Typography>
                    <Typography  color="textSecondary">REAL DATE</Typography>
                    <Typography  variant="body2">Nombre de cas actifs de Covid-19</Typography>

                </CardContent>
                </Grid>

                    {/*------- CARD #2 -------*/}

                <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography  varaint="h5">{recovered.value}</Typography>
                    <Typography  color="textSecondary">REAL DATE</Typography>
                    <Typography  variant="body2">Nombre de morts de Covid-19</Typography>

                </CardContent>
                </Grid>

                {/*------- CARD #3 -------*/}

                <Grid item component={Card}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Infected</Typography>
                    <Typography  varaint="h5">{deaths.value}</Typography>
                    <Typography  color="textSecondary">REAL DATE</Typography>
                    <Typography  variant="body2">Nombre de guérisons de Covid-19</Typography>

                </CardContent>
                </Grid>
          </Grid>
      </div>
    )
}

export default Cards;
