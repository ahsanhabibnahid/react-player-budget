import React from 'react';
import AddedPlayer from './AddedPlayer/AddedPlayer'

const LoadedPlayer = (props) => {
    const loadedPlayer = props.loadedPlayer;
    const addPlayer = props.addPlayer;

    let budget = addPlayer.reduce((sum, player)=> sum + Number(player.salary),0)
    budget = budget.toFixed(2)
    return (
        <div>
            <div className='text-center'>
                <h1>Total Loaded Player : {loadedPlayer.length}</h1>
                <h3>Player Added : {addPlayer.length}</h3>
                <p>Total Budget : {budget}</p>
            </div>
            <div className='row'>
                {
                    addPlayer.map(player => <AddedPlayer player={player}></AddedPlayer>)
                }
            </div>
        </div>
    );
};

export default LoadedPlayer;