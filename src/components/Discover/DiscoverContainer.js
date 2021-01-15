import React, { Fragment, useEffect, useState } from 'react';

import Discover from "./Discover";
import SearchInput from "../SearchInput/SearchInput";
import Rating from "../Rating/Rating";
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

    const filterByRate = (rate) => {
        const filteredMovieList = movieList.filter(({ vote_average }) => {
            const to = rate * 2;
            const from = to - 2;
            const rating = Math.ceil(vote_average);
            return (rating > from && rating <= to);
        });
        setDiscoverData(filteredMovieList);
    }

    return (
        <Fragment>
            <SearchInput
                searchQueryFn={searchQuery}
            ></SearchInput>
            Rating Component
            <Rating
                filterByRateFn={filterByRate}
            ></Rating>
            <Discover
                data={discoverData}
                isFetching={isFetching}
            ></Discover>
        </Fragment >
    );
}

export default DiscoverContainer;