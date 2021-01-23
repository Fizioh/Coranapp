import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Statistiques Covid-19 par pays</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infectés"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Nombre de cas actifs de COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Guérisons"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Nombre de guérisons de COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Morts"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Nombre de morts du COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;