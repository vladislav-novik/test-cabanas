import React from 'react';

const width = 110;

const styles = {
    starsInner: {
        width: `${width}px`
    },
    starsEmptyInner: {
        position: 'absolute',
        width: `${width}px`
    },
    starsOuter: {
        overflow: 'hidden'
    },
    star: {
        padding: '1px',
        color: '#abd1ff'
    }
};

const StarRating = () => {
    return (
        <div>
            <div style={styles.starsOuter}>
                <div>
                    <div style={styles.starsInner}>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                        <i className="fa fa-star fa-lg" style={styles.star}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarRating;