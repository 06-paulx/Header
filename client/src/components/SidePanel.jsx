import React from 'react';
// import Stars from './Stars.jsx';
// import _ from 'lodash';
// import logo from './../../dist/logo.jpg';
function SidePanel({name, summary, description, stars, reviews}) {
  var stars = []
  for (var i = 0; i < stars; i++) {
    stars.push(<img src={'./../dist/stars.png'}/>)
  }
  return (
    <div className="sidePanel">
      <img className="logo" src='https://image.flaticon.com/icons/svg/888/888836.svg' alt='Logo' />
      <div className="summary">{summary}</div>
      <div className="stars">
      {/* {
        let stars = [];
        for (var i = 0; i < stars; i++) {
          stars.push(<img src={'./../dist/stars.png'} />)
        }
        return <span>{stars}</span>
      } */}
      {stars}
      {reviews}
      </div>
      <div className="description">{description}</div>
    </div>
  )
}


module.exports = SidePanel;