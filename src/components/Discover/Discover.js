import React, { Fragment, useEffect, useState } from 'react';

import Rating from "../Rating/Rating";
import Modal from '@material-ui/core/Modal';

const Discover = (props) => {

    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const setListItems = (props) => setItems(props.data);
        setListItems(props);
    });

    const handleOpen = () => {
        setShowModal(!showModal);
    }

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
                        <button type="button" onClick={handleOpen}>
                            Open Modal
                        </button>
                    </li>
                ))}
            </ul>

            <Modal
                open={showModal}
                onClose={handleOpen}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>Modal Content</div>
            </Modal>
        </Fragment >
    );
}

export default Discover;