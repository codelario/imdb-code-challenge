import React, { Fragment, useEffect, useState } from 'react';

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
                        {item.original_title}
                    </li>
                ))}
            </ul>
        </Fragment >
    );
}

export default Discover;