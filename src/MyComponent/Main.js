
import React, { useState } from 'react';
import HomePage from './HomePage';
import SecondPage from "./SecondPage";

// Main page take decision to go either home page or second pagee
function Main() {
    const [meansOfTravel, setMeansOfTravel] = useState("");
    const [distance, setDistance] = useState("");
    const [submitted, setSubmitted] = useState(false);
  
    const handlePageChange = (meansOfTravel, distance) => {
      setMeansOfTravel(meansOfTravel);
      setDistance(distance);
      setSubmitted(true);
    };
    const handlePageChange2 = () => {
        setMeansOfTravel("");
        setDistance("");
        setSubmitted(false);
      };
  
    if (!submitted) {
      return <HomePage handlePageChange={handlePageChange} />;
    } else {
      return <SecondPage handlePageChange2={handlePageChange2}  meansOfTravel={meansOfTravel} distance={distance} />;
    }
  }
  export default Main;