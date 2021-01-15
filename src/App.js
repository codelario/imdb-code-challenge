import './App.css';
import { useEffect, useState } from 'react';

import Discover from "./components/Discover/Discover";
import { getDiscoveryList } from './utils/api';

function App() {
  const [isFetching, setIsFetching] = useState(true);
  const [discoverData, setDiscoverData] = useState([]);

  useEffect(() => {
    getDiscoveryList()
      .then(response => {
        setIsFetching(false);
        setDiscoverData(response.results);
      });
  }, []);

  return (
    <div className="App">
      <Discover
        data={discoverData}
        isFetching={isFetching}
      ></Discover>
    </div>
  );

}

export default App;
