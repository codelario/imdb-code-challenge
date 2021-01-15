import React, { Fragment, useState } from 'react';

const SearchInput = (props) => {

    const [inputValue, setInputValue] = useState(null);

    const handleQueryButton = () => props.searchQueryFn(inputValue);

    const updateInputValue = (evt) => setInputValue(evt.target.value);

    return (
        <Fragment>
            <label for="site-search">Search your favorite movie:</label>
            <input type="search" id="site-search" aria-label="Search your favourite movie" onChange={updateInputValue} />
            <button onClick={handleQueryButton}>Search</button>
        </Fragment >
    );
}

export default SearchInput;