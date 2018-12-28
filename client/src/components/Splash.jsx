import React from 'react';

function Splash({url, showLikeModal, showShareModal}) {
  return (
    <div className="splash">
      <img className="image" src={url} alt="url"/>
      <button className='like' onClick={showLikeModal}>
      </button>
      <button className='share' onClick={showShareModal}>
      </button>
      <button className='tour-this-home'>
        Tour This Home
      </button>
    </div>
  )
}

module.exports = Splash;