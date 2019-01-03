import React from 'react';

var Share = ({show, handleClose, description}) => {
  const showHideClassName = show ? 'm-modal display-block' : 'm-modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='m-share-main'>
        <button className='m-close-button' onClick={handleClose}>
        </button>
        <h2>
          Share
        </h2>
        <p>
          Checkout this awesome listing on Airbnb: {description}
        </p>
        <hr></hr>
          <div className="m-list-item">
            <a className="m-list-item" target="_blank" href="https://www.facebook.com/">Facebook</a>
          </div>
        <hr></hr>
          <div className="m-list-item">
            <a className="m-list-item" target="_blank" href="https://twitter.com/">Twitter</a>
          </div>
        <hr></hr>
          <div className="m-list-item">
            <a className="m-list-item" target="_blank" href="https://gmail.com/">Email</a>
          </div>
        <hr></hr>
          <div className="m-list-item">
           <a className="m-list-item" target="_blank" href="https://www.messenger.com/">Messenger</a> 
          </div>
        <hr></hr>
          <div className="m-list-item">
            <a className="m-list-item">Copy Link</a>
          </div>
        <hr></hr>
          <div className="m-list-item">
           <a className="m-list-item">Embed</a>
          </div>
        <hr></hr>
      </section>
    </div>
  )
}

module.exports = Share