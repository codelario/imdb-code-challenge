import React, { Fragment, useEffect, useState } from 'react';

import Discover from "./Discover";
import SearchInput from "../SearchInput/SearchInput";
import { getDiscoveryList, searchMovie } from '../../utils/api';

const DiscoverContainer = (props) => {

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
        <Fragment>
            <SearchInput
                searchQueryFn={searchQuery}
            ></SearchInput>
            <Discover
                data={discoverData}
                isFetching={isFetching}
            ></Discover>
        </Fragment >
    );
}

export default DiscoverContainer;