import React from 'react';
import CabanaCard from '../CabanaCard';

const getCabanas = (cabanas) => {
    return (
        <div className="card-deck m-0 justify-content-between">
            {
                cabanas.map(cabana => <CabanaCard key={cabana.id} cabana={cabana} />)
            }
        </div>
    );
};

const CabanaList = ({ cabanas }) => (
    <React.Fragment>
        {getCabanas(cabanas)}
    </React.Fragment>
);

export default CabanaList;
