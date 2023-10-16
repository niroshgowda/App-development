import React from 'react'
import './Southkorea.css'
import Admin from './Admin'
import Navbar from './Navbar'

function Southkorea() {
  return (
    <div>
    <Admin/>
    <Navbar/>
    <>
  <div className="col-md-8 mx-auto">
    <h1 style={{ fontWeight: 600 }}>
    Top places to visit in Australia
    </h1>
    <div className="py-3 text-dark flex items-center justify-center">
    </div>
  </div>
  <div
    className="col-md-8 mx-auto"
    style={{
      height: 400,
      backgroundImage:
        "url(https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVzdHJhbGlhfGVufDB8fDB8fHww&w=1000&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  ></div>
  <div className="col-lg-8 p-2 p-sm-4 mx-auto">
    <div className="text-secondary">
      <p className="my-2" style={{ lineHeight: 2 }}>
      &nbsp;&nbsp;Beaches, sunshine, and the iconic Opera House are the first things to draw a traveller to Sydney; discovering its world-class dining, shopping, and entertainment is what keeps everyone coming back. With a beautiful harbour, tranquil parks, and world-class beaches, there are endless things to do in this lively city! And that means there are plenty of places to take photos in Sydney.<br></br>
      <br></br>&nbsp;&nbsp;Here at​​ WanderLenses, we easily connect people with trusted photographers for fun photo shoots and have captured over three million memories worldwide. Today, we asked our local photographers in Sydney to show us around all the very best spots for pictures. 📸

      </p>
      <br />
      <br />
      <h3 className="font-weight-bold text-dark">Places to visit</h3>
      <p className="my-2" style={{ lineHeight: 2 }}>
      1.Sydney Opera House. One of the world’s most photographed buildings and an iconic Sydney landmark.<br></br>
      2.Sydney Harbour Bridge. An impressive steel bridge with 360-degree panoramic views of the Sydney city skyline.<br></br>
      3.Bondi Beach. A quintessential Australian beach with a lively city atmosphere.<br></br>
      4.Royal Botanic Garden. Sydney’s stunning green oasis, located in the heart of the city.<br></br>
      5.Mrs. Macquarie’s Chair. One of Sydney’s best viewpoints, set in the gorgeous Royal Botanic Garden.<br></br>
      6.Manly Beach. World-renowned surfing destination that attracts the world’s best surfers.<br></br>
      7.Blue Mountains. A World Heritage region known for magnificent landscapes and Aboriginal culture.<br></br>
      8.Observatory Hill. A lovely park with perhaps the best viewpoint in Sydney!<br></br>
      9.Hornby Lighthouse. Sydney Harbour National Park’s hidden gem overlooking the expansive Pacific.<br></br>
      10.Queen Victoria Building. An architectural marvel home to Sydney’s best shopping.<br></br>
      </p>
      <br />
      <blockquote
        className="text-primary p-3 font-italic"
        style={{ borderLeft: "4px solid black", lineHeight: 2 }}
      >
      "Australia: The Land Down Under, Above All Others 🌏"
      </blockquote>
      <br />
      <div
className="col-md-8 mx-auto"
style={{
  height: 400,
  backgroundImage:
    "url(https://www.touristsecrets.com/wp-content/uploads/2020/09/AdobeStock_213489353.jpeg)",
  backgroundSize: "cover",
  backgroundPosition: "center"
}}
></div>
<p className="my-2" style={{ lineHeight: 2 }}>
<br></br>
The Land Down Under, Australia is a fascinating destination. Both a country and continent, Australia has a diverse range of climate zones, much like the various natural wonders it offers. Its seasons, in particular, are a perplexing topic. While countries in the Northern Hemisphere are covered in snow during winter, in Australia, people are heading to the beaches in Gold Coast and Sydney.<br></br>
      </p>
    </div>
  </div>
</>
    </div>
  )
}
export default Southkorea