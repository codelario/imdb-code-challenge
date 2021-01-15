import './App.css';
import { useEffect, useState } from 'react';

import Discover from "./components/Discover/Discover";
import SearchInput from "./components/SearchInput/SearchInput";
import { getDiscoveryList, searchMovie } from './utils/api';

function App() {
  const [isFetching, setIsFetching] = useState(true);
  const [discoverData, setDiscoverData] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getDiscoveryList()
      .then(response => {
        setIsFetching(false);
        setDiscoverData(response.results);
        setMovieList(response.results);
      });
  }, []);

  const searchQuery = (query) => {
    if (query.length) {
      searchMovie(query)
        .then((response) => {
          const content = (response.results.length) ? response.results : movieList;
          setDiscoverData(content);
        });
    }
  }

  return (
    <div className="App">

      <SearchInput
        searchQueryFn={searchQuery}
      ></SearchInput>
      <Discover
        data={discoverData}
        isFetching={isFetching}
      ></Discover>
    </div>
  );

}

export default App;
