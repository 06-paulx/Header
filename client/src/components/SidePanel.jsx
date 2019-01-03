import React from 'react';
// import Stars from './Stars.jsx';
// import _ from 'lodash';
// import logo from './../../dist/logo.jpg';
function SidePanel({name, summary, description, stars, reviews}) {
  var n = stars
  return (
    <div className="m-sidePanel">
      <img className="m-logo" src='https://image.flaticon.com/icons/svg/888/888836.svg' alt='Logo' />
      <div className="m-summary">{summary}</div>
      <div className="m-stars">
        {[...Array(n)].map((e, i) => <span className="m-star" key={i}>⭑</span>)}
      {reviews}
      </div>
      <div className="m-description">{description}</div>
    </div>
  )
}


module.exports = SidePanel;