import React from "react";
import './thinking.css';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function addNewLine(str) {
  let newStr = str.replace(/([,.])/g, "$1\n"); // Add new line after commas and periods
  newStr = newStr.split("\n").map(line => line.trim()).join("\n"); // Remove leading whitespace
  return newStr;
}


const Thinking = () => {
  const exerciseArr = [
    "Remind yourself of who you are now. Say your name. Say your age now. Say where you are now. Say what you have done today. Say what you will do next.",
    "Turn your attention to the clothes on your body, whether your arms and legs are covered or not, and the sensation of your clothes as you move in them. Notice how your feet feel to be encased in shoes or socks, or resting on the floor.",
    "Stop and listen. Notice and name what sounds you can hear nearby. Start with the closest or loudest sounds. Gradually move your awareness of sounds outward, so you are focusing on what you can hear in the distance.",
    "Look around you, notice what is front of you and to each side. Name and notice the qualities of large objects and then smaller ones.",
    "Pick one interesting object in your field of vision. Trace its outline with your eyes, as if you were drawing its lines.",
    "Notice five things you can see, five things you can hear, and five things you can feel, taste, or smell.",
    "Run your hands over something with an interesting texture. Describe it in your mind, as if you have never felt anything like it before."
  ];
  const chose = getRandomInt(exerciseArr.length);

  return (
    <div className="backdrop">
      <h1 className="title">Thinking Exercises</h1>
      <p className="quote">{addNewLine(exerciseArr[chose])}</p>
    </div>
  );
};

export default Thinking;