import React from "react";
import "./card.css";

function Card({ title, text, url, bio, level, nota, link, duracao }) {
  return (
    <div className="card-container">
      <div className="card-flipper">
        <div className="card-front">
          <div className="card-title">{title}</div>
          <div className="image-container">
            <img src={url} alt="" />
          </div>
          <div className="card-text">{text}</div>
        </div>
        <div className="card-back">
          <div className="card-text-bio">
            <div className="card-bio">{bio}</div>
          </div>
          <div className="card-info">
            <div className="card-nivel">nivel: {level}</div>
            <div className="card-duracao">duração: {duracao}</div>
            <div className="card-nota">note: {nota}</div>
            <div className="card-link">
              <a target="_blank" rel="noreferrer" href={link}>
                <button>Site do curso</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
