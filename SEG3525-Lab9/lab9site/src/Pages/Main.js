import React from 'react';
import CampNou from '../images/campnou.jpg';

const Main = () => {
  const styleHelp = {
    padding: "0px 10px 0px 0px"
  }
  return (
    <div className="container">
      <br />
      <h1>Welcome to Culers in Ottawa!</h1>
      <br />
      <img src={CampNou} alt="Camp Nou" height="25%" width="25%" align="left" style={styleHelp}/>
      <pre>To view the squad members, visit the <a href="Team">Team</a> tab.</pre>
      <pre>To watch some of our weekly video selection, visit the <a href="History">History</a> tab.</pre>
      <pre>To reserve a table at our Cule bar, visit the <a href="Booking">Booking</a> tab.</pre>
      <pre>If you are new around here, visit the <a href="AboutUs">About Us</a> tab.</pre>
    </div>
  )
}

export default Main
