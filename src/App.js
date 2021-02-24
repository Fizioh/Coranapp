import React from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme'
import { GlobalStyles } from './global/global'



class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        {/*<img className={styles.image} src={image} alt="COVID-19" />*/}

        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <ThemeProvider theme={lightTheme}>
          <>
          <GlobalStyles />
          <button className={styles.button}>Changer Theme</button>
          </>
        </ThemeProvider>
        <Chart data={data} country={country} />

       
      </div>
    );
  }
}

export default App;