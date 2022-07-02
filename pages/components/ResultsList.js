import React from "react";

export const ResultsList = ({ characterArr, setState}) => {
  const handleClick = (characterObj) => {
    setState([characterObj]);
  }
  return (
    <div className="resultsList">
    {characterArr.map((character, index) => {
      return (
        <button className="characterOption" onClick={() => {handleClick(character)}} key={index}>
          {character.name}
        </button>
      )
    })}
    </div>
  )
}