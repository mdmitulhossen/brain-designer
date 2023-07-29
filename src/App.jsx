
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Navbar/Hero";
import Client from "./Components/TrackSection/Client";
import ClientSuccess from "./Components/TrackSection/ClientSuccess";
import Partners from "./Components/Partners/Partners";
import Industries from "./Components/Partners/Industries";





const App = () => {
  return (

    <div>
      <Navbar />
      <Hero />
      <div className="relative top-[600px]">
        <Client />
        <ClientSuccess />
        <Partners />
        <Industries />
      </div>
     
    </div>

  );
};

export default App;
