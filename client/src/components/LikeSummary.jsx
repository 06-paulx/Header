import React from 'react';

var LikeSummary = ({url, location, stars, reviews, description}) => {
  var n = stars
  return (
    <div className="like-summary">
      <div className="thumbnail-container">
        <img className="thumbnail" src={url}></img>
      </div>
        <div className="mini">
          <div className="mini-description">{description}</div>
          <div className="mini-location">{location}</div>
          <div className="mini-stars">
            {[...Array(n)].map((e, i) => <span className="mini-star" key={i}>⭑</span>)}
          {reviews} reviews
          </div>
        </div>
    </div>
  )
}

module.exports = LikeSummary;