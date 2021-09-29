import React from 'react';

const AddedPlayer = (props) => {
    const {name, image, salary} = props.player
    return (
        <div className='col-md-2 card mt-5'>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Salary : {salary}</p>
            </div>
        </div>
    );
};

export default AddedPlayer;