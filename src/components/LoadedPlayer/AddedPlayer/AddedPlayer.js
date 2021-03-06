import React from 'react';

const AddedPlayer = (props) => {
    const {name, image, salary} = props.player
    const removePlayer = props.removePlayer
    return (
        <div className='col-md-2 card mt-5'>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Salary : {salary}</p>
                <button onClick={() => {removePlayer(props.player)}} className='btn btn-danger'>Remove</button>
            </div>
        </div>
    );
};

export default AddedPlayer;