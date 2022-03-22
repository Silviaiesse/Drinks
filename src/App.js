import './App.css';
import Home from './screens/Home';
import NotFound from "./screens/NotFound";
import Drink from './screens/Drink';
import React from 'react'
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loader from "./lotties/loader.json"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(true);


  //effetto che setta la variabile a false dopo 2sec
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }, [])

  //quando loading è true allora ritorna il div contenente la gif
  if (loading) {

    return ( <div className="loader">
            <Lottie animationData={loader} width={100} height={100} autoPlay loop />
            </div>
    );
  }

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route
          path="/" 
          element={<Home />} />

        <Route
          path="/drinks/:idDrink" 
          element={<Drink />} />

        <Route
          path="*"
          element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
