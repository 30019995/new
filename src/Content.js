import React, { Component } from "react";
import Game from "./data.json";

const games = Game.map(
    (Game) => 
    {
        return(
            <div class="card mb-3 bg-light">
                  <h2 class="card-title text-center">{Game.title}</h2>
                <div class="text-center">
  <img src={Game.image} class="rounded img-fluid" alt=""></img></div>
  <div class="card-body">

  <h3 class="card-title">{Game["heading-1"]}</h3>
    <p class="card-text">{Game["paragraph-1"]}</p>
    <h3 class="card-title">{Game["heading-2"]}</h3>
    <p class="card-text">{Game["paragraph-2"]}</p>
    <h3 class="card-title">{Game["heading-3"]}</h3>
    <p class="card-text">{Game["paragraph-3"]}</p>
  </div>
</div>
       
            );
    }
);

class Content extends Component {
    render() {
        return (
            <div>
                
        {games}
            </div>            
                );
    }
}

export default Content;
