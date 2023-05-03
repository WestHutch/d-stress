import React, { useState } from "react";
import ambient from "../assets/ambient.mp3";
import birds from "../assets/birds.mp3";
import crickets from "../assets/crickets.mp3";
import forestRiver from "../assets/forest_river.mp3";
import mourningDove from "../assets/mourning_dove.mp3";
import rainInside from "../assets/rain_inside.mp3";
import rainOutside from "../assets/rain_outside.mp3";
import fire from "../assets/fire.mp3";
import underwater from "../assets/underwater.mp3";
import waterfall from "../assets/waterfall.mp3";
import windchime from "../assets/wind_chime.mp3";
import wind from "../assets/wind.mp3";
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import './soothing.css';




let ambientSound = new Audio(ambient);
let birdsSound = new Audio(birds);
let cricketsSound = new Audio(crickets);
let forestRiverSound = new Audio(forestRiver);
let mourningDoveSound = new Audio(mourningDove);
let rainInsideSound = new Audio(rainInside);
let rainOutsideSound = new Audio(rainOutside);
let fireSound = new Audio(fire);
let underwaterSound = new Audio(underwater);
let waterfallSound = new Audio(waterfall);
let windChimeSound = new Audio(windchime);
let windSound = new Audio(wind);

const soundsArr = [
  {sound: ambientSound, label: "Ambient Music", id: 0},
  {sound: birdsSound, label: "Bird Noises", id: 1},
  {sound: cricketsSound, label: "Cricket Noises", id: 2},
  {sound: fireSound, label: "Fire", id: 3},
  {sound: forestRiverSound, label: "Forest River", id: 4},
  {sound: mourningDoveSound, label: "Mourning Dove", id: 5},
  {sound: rainInsideSound, label: "Rain Inside", id: 6},
  {sound: rainOutsideSound, label: "Rain Outside", id: 7},
  {sound: underwaterSound, label: "Underwater", id: 8},
  {sound: waterfallSound, label: "Waterfall", id: 9},
  {sound: windChimeSound, label: "Wind Chimes", id: 10},
  {sound: windSound, label: "Wind", id: 11},
];


const Soothing = () => {
  const [currentPlaying, setCurrentPlaying] = useState(null);

  function playSound(soundPlayed) {
    if(currentPlaying === soundPlayed) { //to pause it
      soundPlayed.pause();
      setCurrentPlaying(null);
    }
    else if (currentPlaying !== null) { //to pause one playing and switch to a different one
      currentPlaying.pause();
      soundPlayed.load();
      soundPlayed.play();
      setCurrentPlaying(soundPlayed);
    }
    else { //to play a sound if none are playing
      soundPlayed.load();
      soundPlayed.play();
      setCurrentPlaying(soundPlayed);
    }

    
  }

  
  const soundCardList = () => (
    <>
      {soundsArr.map(aSound => soundCard(aSound))}
    </>
  );

  const soundCard = (sound) => {
    return (
      <div className = "soundCard" key={sound.id}>
        <hr />
        <table className="soundTable">
          <tbody>
            <tr>
              <td>
                {currentPlaying !== sound.sound && <BsPlayCircle className="soundIcon" onClick={() => playSound(sound.sound)} />}
                {currentPlaying === sound.sound && <BsPauseCircle className="soundIcon" onClick={() => playSound(sound.sound)} />}
              </td>
              <td className="soundLabelTd"><p className="soundLabel">{sound.label}</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="backGround">
      <div className="cardContainer">
        <h1 style={{color: "white"}}>Soothing Sounds</h1>
        {soundCardList()}
      </div>
    </div>
    
  );
};

export default Soothing;