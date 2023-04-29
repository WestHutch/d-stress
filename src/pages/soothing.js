import React from "react";
import ambient from "../assets/ambient.mp3";
import birds from "../assets/birds.mp3";
import crickets from "../assets/crickets.mp3";
import forestRiver from "../assets/forest_river.mp3";
import mourningDove from "../assets/mourning_dove.mp3";
import rainInside from "../assets/rain_inside.mp3";
import rainOutside from "../assets/rain_outside.mp3";
import { BsPlayCircle } from "react-icons/bs";
import './soothing.css';



let currentPlaying = [];
let ambientSound = new Audio(ambient);
let birdsSound = new Audio(birds);
let cricketsSound = new Audio(crickets);
let forestRiverSound = new Audio(forestRiver);
let mourningDoveSound = new Audio(mourningDove);
let rainInsideSound = new Audio(rainInside);
let rainOutsideSound = new Audio(rainOutside);

const soundsArr = [
  {sound: ambientSound, label: "Ambient Music", id: 0},
  {sound: birdsSound, label: "Bird Noises", id: 1},
  {sound: cricketsSound, label: "Cricket Noises", id: 2},
  {sound: forestRiverSound, label: "Forest River", id: 3},
  {sound: mourningDoveSound, label: "Mourning Dove", id: 4},
  {sound: rainInsideSound, label: "Rain Inside", id: 5},
  {sound: rainOutsideSound, label: "Rain Outside", id: 6},
];


const soundCardList = () => (
  <>
    {soundsArr.map(aSound => soundCard(aSound))}
  </>
);

const soundCard = (sound) => {
  return (
    <div className = "soundCard">
      <hr />
      <table className="soundTable">
        <td><BsPlayCircle className="soundIcon" onClick={() => playSound(sound.sound)} /></td>
        <td className="soundLabelTd"><p className="soundLabel">{sound.label}</p></td>
      </table>
    </div>
  );
};

function playSound(soundPlayed) {
  if(currentPlaying[0] === soundPlayed) {
    soundPlayed.pause();
    currentPlaying[0] = new Audio();
  }
  else if (currentPlaying[0]) {
    currentPlaying[0].pause();
    soundPlayed.load();
    soundPlayed.play();
    currentPlaying[0] = soundPlayed;
  }
  else {
    soundPlayed.load();
    soundPlayed.play();
    currentPlaying[0] = soundPlayed;
  }
}

const Soothing = () => {
  return (
    <div className="backGround">
      <h1 style={{color: "white"}}>Soothing Sounds</h1>
      {soundCardList()}
    </div>
    
  );
};

export default Soothing;