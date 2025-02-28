import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import VoiceSelection from "./pages/VoiceSelection";
import DistanceSelection from "./pages/DistanceSelection";
import Detection from "./pages/Detection";
import WebTokens from "./services/WebTokens";

function App() {
  React.useEffect(() => {
    TokenService.generateToken();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/select-voices" element={<VoiceSelection />} />
        <Route path="/select-distance" element={<DistanceSelection />} />
        <Route path="/detection" element={<Detection />} />
      </Routes>
    </Router>
  );
}

export default App;
