import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {name, team, salary, image} = props.player
    const handlePlayer = props.handlePlayer
    return (
        
        <div className='col-md-4 card p-3'>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Club : {team}</p>
                <p className="card-text">Salary : {salary}</p>
                <button onClick={()=>{handlePlayer(props.player)}} className="btn btn-primary"><FontAwesomeIcon icon={faUserPlus} /> Add Player</button>
            </div>
        </div>
        
    )
}

export default Player
