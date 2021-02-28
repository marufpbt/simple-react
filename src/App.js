import React, { useState, useEffect } from 'react';
import './App.css';
import Data from './fakeData/Data.json';
import Player from './components/Player/Player';
import 'bootstrap/dist/css/bootstrap.min.css';
import Team from './components/Player/Team/Team';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    setPlayers(Data)
  }, []);
  const [team, setTeam] = useState([]);
  const handleAddPlayer = (player) => {
    const newTeam = [...team, player];
    setTeam(newTeam);
  }

  return (
    <div style={{ display: "flex", margin: '20px' }}>
      <div className="player-container">
        {
          players.map(player => <Player key={player.id} handleAddPlayer={handleAddPlayer} player={player}></Player>)
        }
      </div>
      <div className="team-container" style={{margin:'30px auto'}}>
        <Team team={team}></Team>
      </div>
    </div>
  );
}

export default App;
