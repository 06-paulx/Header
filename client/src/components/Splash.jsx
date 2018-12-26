import React from 'react';

function Splash({url, showLikeModal, showShareModal}) {
  return (
    <div className="splash">
      <img className="image" src={url} alt="url"/>
      <button className='like' onClick={showLikeModal}>
        <span className="glyphicon glyphicon-thumbs-up"></span>
      </button>
      <button className='share' onClick={showShareModal}>
        <span className="glyphicon glyphicon-share"></span>
      </button>
      <button className='tour-this-home'>
        Tour This Home
      </button>
    </div>
  )
}

module.exports = Splash;