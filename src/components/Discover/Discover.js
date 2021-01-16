import React, { Fragment, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import configs from "../../App.config";
import DetailView from "../DetailView/DetailView";

const Discover = (props) => {

    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(false);

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            width: 1200,
            height: 'auto',
        },
        icon: {
            color: 'rgba(255, 255, 255, 0.54)',
        },
    }));

    const classes = useStyles();

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
            <p>{props.isFetching ? 'Loading Movies...' : ''}</p>
            <div className={classes.root}>
                <GridList cellHeight={160} cols={5} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={5} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Popular Movies</ListSubheader>
                    </GridListTile>
                    {items && items.map((tile) => (
                        <GridListTile key={tile.id} cols={1} onClick={() => handleOpenModal(tile)}>
                            <img src={`${configs.PREVIEW_URL}${tile.poster_path}`} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>Release Date: {tile.release_date}</span>}
                                actionIcon={
                                    <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
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