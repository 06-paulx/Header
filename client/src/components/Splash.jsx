import React from 'react';

function Splash({url, showLikeModal, showShareModal}) {
  return (
    <div className="m-splash">
      <img className="m-header-image" src={url} alt="url"/>
      <button className='m-like' onClick={showLikeModal}>
      </button>
      <button className='m-share' onClick={showShareModal}>
      </button>
      <button className='m-tour-this-home'>
        Tour This Home
      </button>
    </div>
  )
}

module.exports = Splash;