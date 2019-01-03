import React from 'react';

var LikeSummary = ({url, location, stars, reviews, description}) => {
  var n = stars
  return (
    <div className="m-like-summary">
      <div className="m-thumbnail-container">
        <img className="m-thumbnail" src={url}></img>
      </div>
        <div className="m-mini">
          <div className="m-mini-description">{description}</div>
          <div className="m-mini-location">{location}</div>
          <div className="m-mini-stars">
            {[...Array(n)].map((e, i) => <span className="m-mini-star" key={i}>⭑</span>)}
          {reviews} reviews
          </div>
        </div>
    </div>
  )
}

module.exports = LikeSummary;