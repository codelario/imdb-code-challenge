import React, { useEffect, useState } from 'react';
import styles from './Rating.module.scss';
import { Rating as RatingStars } from '@material-ui/lab';

const Rating = (props) => {

  const [selectedItem, setSelectedItem] = useState(0);
  useEffect(() => {
    resetRatingValue();
  }, [props.fireResetRating]);

  const ratingChanged = (newRating) => {
    if (newRating !== selectedItem) {
      setSelectedItem(newRating);
      props.filterByRateFn(newRating)
    }
  };

  const resetRatingValue = () => setSelectedItem(0);

  return (
    <div className={styles.Rating}>
      <RatingStars
        name="hover-feedback"
        value={selectedItem}
        onChange={(event, newValue) => {
          ratingChanged(newValue);
        }}
      />
    </div>
  )
};

export default Rating;
