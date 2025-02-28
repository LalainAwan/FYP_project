import React from "react";
import { useNavigate } from "react-router-dom";

const SelectDistance = () => {
  const navigate = useNavigate();
  const distances = ["3-5 m", "10-15 m", "20-25 m", "30-35 m", "35-50 m"];

  return (
    <div className="page">
      <h1>Listen Up!</h1>
      <h2>Select your Distance!</h2>
      <input type="text" placeholder="Search" />
      <ul>
        {distances.map((distance) => (
          <li key={distance}><input type="checkbox" /> {distance}</li>
        ))}
      </ul>
      <button onClick={() => navigate("/detection")}>Next</button>
    </div>
  );
};

export default SelectDistance;
