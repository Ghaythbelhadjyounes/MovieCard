import React from "react";

function MovieCard({ films }) {
  return (
    <div style={{ display: "flex", marginTop: "7%" }}>
      <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div className="card d-flex position-relative flex-column">
          <div className="imgContainer">
            <img src={films.url} alt="Affiches" style={{ height: "250px", width: "250px" }} />
          </div>
          <div className="content">
            <h2>{films.title}</h2>
            <p>{films.description}</p>
            <h4>{films.rate}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
