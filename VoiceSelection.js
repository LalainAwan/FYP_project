import React from "react";
import { useNavigate } from "react-router-dom";

const SelectVoices = () => {
  const navigate = useNavigate();
  const voices = ["Bell Ringing", "Baby Crying", "Pet Barking", "Screaming", "Knocking"];

  return (
    <div className="page">
      <h1>Listen Up!</h1>
      <h2>Select your Targeted Voices!</h2>
      <input type="text" placeholder="Search" />
      <ul>
        {voices.map((voice) => (
          <li key={voice}><input type="checkbox" /> {voice}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/select-distance")}>Next</button>
    </div>
  );
};