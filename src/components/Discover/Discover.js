import React, { Fragment, useEffect, useState } from 'react';

import Rating from "../Rating/Rating";
const Discover = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const setListItems = (props) => setItems(props.data);
        setListItems(props);
    });

    return (
        <Fragment>
            <div>Movies List</div>
            <p>{props.isFetching ? 'Loading Movies...' : ''}</p>
            <ul>
                {items && items.map(item => (
                    <li key={item.id}>
                        {item.original_title}&nbsp;
                        {item.vote_average}
                        <Rating
                            value={Math.ceil(item.vote_average / 2)}
                            edit={false}
                        ></Rating>
                    </li>
                ))}
            </ul>
        </Fragment >
    );
}

export default Discover;