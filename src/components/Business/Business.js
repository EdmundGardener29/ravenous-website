import React from 'react';
import styles from './Business.module.css';

const business = {
    imgSrc:
        "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'BorderTown',
    state: 'New York',
    zipcode: '10101',
    category: 'Italian',
    rating: '4.5',
    reviewCount: '90',
};


const Business = () => {
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={business.imgSrc} alt="" />
      </div>
      <h2>{business.name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipcode}`}</p>
        </div>
        <div className={styles.BusinessReview}>
          <h3>{business.category.toUpperCase()}</h3>
            <h3 className={styles.rating}> {`${business.rating}stars`}</h3>
            <p>{ `${business.reviewCount} review`}</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
