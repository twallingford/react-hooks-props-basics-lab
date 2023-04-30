import React from "react";
import user from "../data/user";

function About(props) {
  if(user.bio){
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
      </div>
    );
  }
  else{
    return (
      <div id="about">
        <h2>About Me</h2>
        <p>No P</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        {/* add your <Links /> component here */}
      </div>
    );
  }
}

export default About;
