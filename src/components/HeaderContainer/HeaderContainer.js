import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import SearchInput from "../SearchInput/SearchInput";
import Rating from "../Rating/Rating";
import backgroundImage from './public/img/header-background.png';

const HeaderContainer = (props) => {

  const [fireResetRating, setFireResetRating] = useState(false)

  const searchMovies = (query) => {
    setFireResetRating(true);
    props.searchQueryFn(query);
  }

  const updatingRating = () => setFireResetRating(false);

  const filterByRate = (rating) => {
    props.filterByRateFn(rating);
  }

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
                Your favourite movies here
                        </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg>
              <SearchInput
                searchQueryFn={searchMovies}
                resetMovieslistFn={props.resetMovieslistFn}
                updatingRatingFn={fireResetRating}
              ></SearchInput>
            </Grid>
            <Grid item xs>
              <Rating
                filterByRateFn={filterByRate}
                fireResetRating={fireResetRating}
                updatingRatingFn={updatingRating}
              ></Rating>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Container>
  );
};

export default HeaderContainer;
