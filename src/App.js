import React from 'react';
import axios from 'axios';

import './App.module.css';

class App extends React.Component {
  state = { advice: '' };

  componentDidMount() {
    this.fetchAdvice();
  }

  // Using https://api.adviceslip.com/
  /*
  Example of returned JSON:
  {
    slip: {
      id: 51,
      advice: "It's wrong to be right."
    }
  }
  */
  fetchAdvice = async () => {
    try {
      // Grabbing just the 'advice' by deconstructing JSON
      /* ONE WAY
      const {
        data: {
          slip: { advice },
        },
      } = await axios.get('https://api.adviceslip.com/advice');
      */

      const res = await axios.get('https://api.adviceslip.com/advice');
      const { advice } = res.data.slip;
      // console.log(advice);
      this.setState({ advice });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { advice } = this.state;

    return (
      <div className="App">
        <h1>{advice}</h1>
      </div>
    );
  }
}

export default App;
