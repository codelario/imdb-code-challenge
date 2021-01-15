import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

import config from "./App.config";
import Discover from "./components/Discover/Discover";

function App(params) {
  const [isFetching, setIsFetching] = useState(true);
  const [discoverData, setDiscoverData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const url = `${config.DISCOVER_URL}?api_key=${config.API_KEY}`;
    await fetch(url)
      .then(res => res.json())
      .then(response => {
        setIsFetching(false);
        setDiscoverData(response.results);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React aca
      </a>
        {isFetching}
        <Discover
          data={discoverData}
          isFetching={isFetching}
          test='prueba loca'
        ></Discover>
      </header>
    </div>
  );

}

export default App;
