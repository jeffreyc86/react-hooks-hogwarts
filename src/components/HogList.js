import React, {useState} from "react";
import HogTile from "./HogTile"

import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg"; 

const hogImages = {
    "Augustus Gloop": augustus_gloop,
    "Babe": babe,
    "Bailey": bailey,
    "Cherub": cherub,
    "Galaxy Note": galaxy_note,
    "Leggo My Eggo": leggo_my_eggo,
    "Peppa": peppa,
    "Piggy smalls": piggy_smalls,
    "Piglet": piglet,
    "Porkchop": porkchop,
    "Trouble": trouble,
    "Truffle Shuffle": truffle_shuffle
}


function HogList({hogs}) {
    
   
  const hogTiles = hogs.map(hog => {
     return (
            <HogTile 
               key={hog.name} 
               name={hog.name} 
               image={hog.image ? hog.image : hogImages[hog.name]} 
               specialty={hog.specialty} 
               greased={hog.greased} 
               weight={hog.weight} 
               medal={hog.medal ? hog.medal : hog['highest medal achieved']}
            />
            )
   })



    return (
      <div className="ui grid container">
         {hogTiles}
      </div>
    )
}



export default HogList