import React from "react";




function About({ about, image ="https://via.placeholder.com/215"}) {
  return (
    <aside>
    <p>{ about }</p>
    <img src= { image } alt ="blog logo"/> 
    </aside>
  );
}

export default About;