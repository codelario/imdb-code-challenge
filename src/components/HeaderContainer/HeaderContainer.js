import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import SearchInput from "../SearchInput/SearchInput";
import Rating from "../Rating/Rating";
import backgroundImage from './public/img/header-background.png';

const HeaderContainer = (props) => {

  const [resetRating, fireResetRating] = useState(false)
  const [resetTextbox, fireResetTextbox] = useState(false)

  const searchMovies = (query) => {
    fireResetRating(!resetRating);
    props.searchQueryFn(query);
  };

  const clearFilter = () => {
    fireResetRating(!resetRating);
    fireResetTextbox(!resetTextbox);
    props.resetMovieslistFn();
  };

  const filterByRate = (rating) => {
    fireResetTextbox(!resetTextbox);
    props.filterByRateFn(rating);
  };

  const styles = {
    containerStyles: {
      backgroundImage: `url(${backgroundImage})`,
      height: '500px',
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    divContainer: {
      flexGrow: 1,
    }
  };

  return (
    <Container maxWidth="lg">
      <Container maxWidth="lg" style={styles.containerStyles}>
        <div className={styles.divContainer}>
          <Grid container spacing={3}>
            <Grid item md>
              <Typography variant="h3" component="h3">
                Your favourite movies
                        </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg>
              <SearchInput
                searchQueryFn={searchMovies}
                resetMovieslistFn={props.resetMovieslistFn}
                fireResetTextBox={resetTextbox}
              ></SearchInput>
            </Grid>
            <Grid item xs>
              <Rating
                filterByRateFn={filterByRate}
                fireResetRating={resetRating}
              ></Rating>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs>
              <Button variant="contained" color="primary" onClick={clearFilter}>
                Clear Filter
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Container>
  );
};

export default HeaderContainer;
