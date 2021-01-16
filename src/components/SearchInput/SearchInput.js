import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = (props) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            padding: '2px 4px',
            display: 'inline-flex',
            alignItems: 'center',
            width: 400,
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
    }));

    const classes = useStyles();
    const handleQueryButton = (evt) => {
        if (evt.target.value.length < 3) {
            return;
        }
        props.searchQueryFn(evt.target.value);
    };

    return (
        <Fragment>
            <Paper component="form" className={classes.root}>
                <IconButton className={classes.iconButton} aria-label="menu">
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Search IMDB Movies"
                    inputProps={{ 'aria-label': 'search movies' }}
                    onChange={handleQueryButton}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Fragment >
    );
}

export default SearchInput;