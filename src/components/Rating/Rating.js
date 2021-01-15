import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import styles from './Rating.module.scss';

const Rating = (props) => {

  const [selectedItem, setSelectedItem] = useState(null);

  const ratingChanged = (newRating) => {
    if (newRating === selectedItem) {
      return;
    }
    setSelectedItem(newRating);
    return props.filterByRateFn(newRating)
  };

  return (
    <div className={styles.Rating}>
      <ReactStars
        value={(!props.value ? 0 : props.value)}
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
        edit={props.edit}
      />,
    </div>
  )
};

export default Rating;
