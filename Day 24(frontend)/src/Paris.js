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
    Top places to visit in Paris
    </h1>
    <div className="py-3 text-dark flex items-center justify-center">
    </div>
  </div>
  <div
    className="col-md-8 mx-auto"
    style={{
      height: 400,
      backgroundImage:
        "url(https://www.theparisphotographer.com/wp-content/uploads/2020/02/The-Paris-Photographer-Best-photography-team-in-Paris.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
  ></div>
  <div className="col-lg-8 p-2 p-sm-4 mx-auto">
    <div className="text-secondary">
      <p className="my-2" style={{ lineHeight: 2 }}>
      &nbsp;&nbsp;The city of Paris has more familiar landmarks than any other city in the world. On your first visit, you will arrive in the French capital with all sorts of expectations: cobblestone streets lined with sidewalk cafes, of intellectuals discussing weighty matters in these cafes, of romance along the Seine, naughty nightclub revues in a district called Montmartre, and yes, even the Eiffel Tower.<br></br>
      <br></br>&nbsp;&nbsp;The truth is, if you look hard enough, you will find all of those. With an open mind, you will discover that Paris is enchanting, at any time of the year. It welcomes guests with open arms. I have been there seven times, seen every season, and met a lot of people, some of which have become friends… and I came home thoroughly satisfied from each visit to the city of love and lights.

      </p>
      <br />
      <br />
      <h3 className="font-weight-bold text-dark">Places to visit</h3>
      <p className="my-2" style={{ lineHeight: 2 }}>
      1.Eiffel Tower<br></br>
      2.Notre Dame Cathedral<br></br>
      3.Louvre Museum<br></br>
      4.Champs Elysées / Arc of Triumph<br></br>
      5.Cruise on the Seine<br></br>
      6.Montmartre<br></br>
      7.Palace of Versailles<br></br>
      8.The Latin Quarter - Luxembourg park<br></br>
      9.Moulin Rouge<br></br>
      10.Disneyland Paris<br></br>
      </p>
      <br />
      <blockquote
        className="text-primary p-3 font-italic"
        style={{ borderLeft: "4px solid black", lineHeight: 2 }}
      >
      "Parisian Dreams: The City of Lights and Love 🗼💖"
      </blockquote>
      <br />
      <div
className="col-md-8 mx-auto"
style={{
  height: 400,
  backgroundImage:
    "url(https://imageio.forbes.com/specials-images/imageserve/6426fcf382f9dcd275217d97/0x0.jpg?format=jpg&width=1200)",
  backgroundSize: "cover",
  backgroundPosition: "center"
}}
></div>
<p className="my-2" style={{ lineHeight: 2 }}>
<br></br>
Disneyland Paris contains 2 theme parks, 8 resort hotels, 7 associated hotels, a golf course, a high-speed rail station, a large outlet centre (la vallée village), and a large shopping mall: Val d'Europe.
      </p>
    </div>
  </div>
</>

    </div>
  )
}

export default Southkorea