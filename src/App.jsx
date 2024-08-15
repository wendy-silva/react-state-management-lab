import "./App.css";
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter]);
      setMoney(money - fighter.price);
      setTotalStrength(totalStrength + fighter.strength);
      setTotalAgility(totalAgility + fighter.agility);
    } else {
      console.log("Not enough money");
    }
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((team) => team.name !== fighter.name));
    setMoney(money + fighter.price);
    setTotalStrength(totalStrength - fighter.strength);
    setTotalAgility(totalAgility - fighter.agility);
  };

  return (
    <>
      <div>
        <h1>Zombie Fighters</h1>
        <h2>Money: {money}</h2>
        <h2>Team Strength: {totalStrength}</h2>
        <h2>Team Agility: {totalAgility}</h2>
        <h2>Team:</h2>
          <h3>
          {team.length === 0 ? `Pick some team members!` : team.length}
          </h3>
        <h2>Fighters</h2>
        <ul>
          {zombieFighters.map((zombieFighter) => (
            <li key={zombieFighter.name}>
              <img src={zombieFighter.img} alt={zombieFighter.name} />
              <h3>{zombieFighter.name}</h3>
              <p>Price:<span>{zombieFighter.price}</span></p>
              <p>Strength:<span> {zombieFighter.strength}</span></p>
              <p>Agility:<span> {zombieFighter.agility}</span></p>
              <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
              <button onClick={() => handleRemoveFighter(zombieFighter)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;