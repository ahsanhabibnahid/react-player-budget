import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Player from './components/Player/Player';
import PlayerData from './fakeData/players.json'
import LoadedPlayer from './components/LoadedPlayer/LoadedPlayer';

function App() {
  const [loadedPlayer, setLodedPlayer] = useState([])
  const [addPlayer, setAddPlayer] = useState([])

  useEffect(() => {
    setLodedPlayer(PlayerData)
  }, [])

  const handlePlayer = (player) => {
    if(addPlayer.indexOf(player) !== -1){
      const newPlayer = [...addPlayer]
      setAddPlayer(newPlayer)
      alert('He is already added!!')
    }
    else{
      const newPlayer = [...addPlayer, player]
      setAddPlayer(newPlayer)
    }
  }


  return (
    <div>

      <LoadedPlayer loadedPlayer={loadedPlayer}  addPlayer={addPlayer}></LoadedPlayer>

      <div className="row mt-5">
        {
          PlayerData.map(player => <Player handlePlayer={handlePlayer} player={player}></Player>)
        }
      </div>
    </div>
  );
}

export default App;
