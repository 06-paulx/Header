import React from 'react';

function Splash({url}) {
  return (
    <div className="splash">
      <img className="image" src={url} alt="url"/>
      <button className='like'>
        <span className="glyphicon glyphicon-thumbs-up"></span>
      </button>
      <button className='share'>
        <span className="glyphicon glyphicon-share"></span>
      </button>
      <button className='tour-this-home'>
        Tour This Home
      </button>
    </div>
  )
}

module.exports = Splash;