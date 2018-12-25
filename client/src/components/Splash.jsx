import React from 'react';

function Splash({url, showModal}) {
  return (
    <div className="splash">
      <img className="image" src={url} alt="url"/>
      <button className='like' onClick={showModal}>
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