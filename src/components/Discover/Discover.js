import React, { Fragment, useEffect, useState } from 'react';

import Rating from "../Rating/Rating";
import DetailView from "../DetailView/DetailView";
import Modal from '@material-ui/core/Modal';

const Discover = (props) => {

    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(false);

    useEffect(() => {
        const setListItems = (props) => setItems(props.data);
        setListItems(props);
    });

    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setShowModal(!showModal);
    };

    return (
        <Fragment>
            <div>Movies List</div>
            <p>{props.isFetching ? 'Loading Movies...' : ''}</p>
            <ul>
                {items && items.map(item => (
                    <li key={item.id} onClick={() => handleOpenModal(item)}>
                        {item.original_title}&nbsp;
                        {item.vote_average}
                        <Rating
                            value={Math.ceil(item.vote_average / 2)}
                            edit={false}
                        ></Rating>
                    </li>
                ))}
            </ul>

            <Modal
                open={showModal}
                onClose={handleOpenModal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <DetailView
                    item={selectedItem}
                    closeModalFn={handleOpenModal}
                ></DetailView>
            </Modal>
        </Fragment >
    );
}

export default Discover;