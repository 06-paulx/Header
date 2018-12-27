import React from 'react';
// import Stars from './Stars.jsx';
// import _ from 'lodash';
// import logo from './../../dist/logo.jpg';
function SidePanel({name, summary, description, stars, reviews}) {
  var n = stars
  console.log(n)
  return (
    <div className="sidePanel">
      <img className="logo" src='https://image.flaticon.com/icons/svg/888/888836.svg' alt='Logo' />
      <div className="summary">{summary}</div>
      <div className="stars">
        {[...Array(n)].map((e, i) => <span className="star" key={i}>⭑</span>)}
      {reviews}
      </div>
      <div className="description">{description}</div>
    </div>
  )
}


module.exports = SidePanel;