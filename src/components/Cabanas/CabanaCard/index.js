import React from 'react';
import StarRating from '../../StarRating';
import image from '../../../images/cabana.jpg';

import styles from './CabanaCard.module.scss';

const CabanaCard = ({ cabana }) => (
    <div className={`col-md-4 ${styles.cabana}`}>
        <div className={styles.pic}>
            <img className="card-img-top" src={image} alt="Cabana" />
        </div>
        <div className="card-body py-1 px-0">
            <h5 className={styles.title}>{cabana.title}</h5>
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className={styles.type}>{cabana.type}</div>
                    <StarRating rating={cabana.rating} />
                    <div className={styles.address}><i class="fa fa-map-marker mr-1" aria-hidden="true"></i>{cabana.address}</div>
                </div>
                <div className="text-center">
                    {cabana.oldPrice && (
                        <div className={styles.oldPrice}>
                            Was ${cabana.oldPrice}
                        </div>
                    )}
                    <div className={`${styles.price} ${cabana.oldPrice ? styles.green : ''}`}>${cabana.price}</div>
                    <div className={`${styles.guests} ${cabana.oldPrice ? styles.green : ''}`}>Per guest</div>
                </div>
            </div>
        </div>
    </div>
);

export default CabanaCard;
