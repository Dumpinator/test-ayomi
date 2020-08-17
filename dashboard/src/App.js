import React, { useState } from 'react';

import './App.css';
import Navbar from './Composants/Navbar/Navbar';
import Panel from './Composants/Panel/Panel';

function App() {

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Axom Bikes",
      //date: "24 septembre 2019",
      //category: "Drame historique",
      resume: "Dans l'Angleterre du 15e siècle, Hal, un prince capricieux et bon à rien, devient un roi puissant lorsqu'il hérite à contrec?ur du trône et de ses conflits",
      like: false,
      nbLike: 18,
      comment: 3,
      bookmark: false,
      trailer: "https://www.youtube.com/watch?v=bVH7LurFHHc",
      image: "images/the-king.jpg"
    },
    {
      id: 2,
      title: "Joker",
      //date: "09 Octobre 2019",
      //category: "Drame / Thriller",
      resume: "A Gotham City, Arthur Fleck, un comédien de stand-up raté. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.",
      like: false,
      nbLike: 7,
      comment: 1,
      bookmark: false,
      trailer: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
      image: "images/joker.jpg"
    }
  ]);

  return (
    <div className="App">
      <Navbar />
      <Panel />
    </div>
  );
}

export default App;
