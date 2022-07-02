import React from "react"
export const CharacterShips = ({ships}) => {
  return (
    <>
      <h1 className="containerLabel">
        Ships
      </h1>
      <div className="cardContainer">
        {ships && ships.map(ship => {
          return (
            <div className="shipCard">
              <h3 className="titleText" key={ship.episode_id}>
                {ship.name}
              </h3>
              <p className="shipDetails">
                Manufacturer: {ship.manufacturer}
              </p>
              <p className="shipDetails">
                Crew: {ship.crew}
              </p>
              <p className="shipDetails">
                Class: {ship.starship_class}
              </p>
            </div>
          )
        })}
      </div>
    </>
  )
}