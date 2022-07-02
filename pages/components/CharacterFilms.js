import React from "react"
export const CharacterFilms = ({films}) => {
  return (
    <>
      <h1 className="containerLabel">
        Films
      </h1>
      <div className="cardContainer">
      {films.map(movie => {
        return (
          <div className="filmCard">
            <h3 className="titleText" key={movie.episode_id}>
              {movie.title}
            </h3>
            <p className="filmDetails">
              Director: {movie.director}
            </p>
            <p className="filmDetails">
              Producer: {movie.producer}
            </p>
            <p className="filmDetails">
              Release Date: {movie.release_date}
            </p>
          </div>
        )
      })}
      </div>
    </>
  )
}