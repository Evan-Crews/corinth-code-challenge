import React from "react"
export const CharacterSpecies = ({species}) => {
  return (
    <div className="speciesData">
      <h1 className="titleText">
        {species.name}
      </h1>
      <p className="statText">
        Designation: {species.designation}
      </p>
      <p className="statText">
        Average Lifespan: {species.average_lifespan}
      </p>
      <p className="statText">
        Language: {species.language}
      </p>
    </div>
  )
}