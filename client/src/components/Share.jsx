import React from 'react';

var Share = ({show, handleClose, description}) => {
  console.log('click')
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='share-main'>
        <button onClick={handleClose}>
          Close
        </button>
        <h2>
          Share
        </h2>
        <p>
          Checkout this awesome listing on Airbnb: {description}
        </p>
        <hr></hr>
          <div className="list-item">
            <a className="list-item" target="_blank" href="https://www.facebook.com/">Facebook</a>
          </div>
        <hr></hr>
          <div className="list-item">
            <a className="list-item" target="_blank" href="https://twitter.com/">Twitter</a>
          </div>
        <hr></hr>
          <div className="list-item">
            <a className="list-item" target="_blank" href="https://gmail.com/">Email</a>
          </div>
        <hr></hr>
          <div className="list-item">
           <a className="list-item" target="_blank" href="https://www.messenger.com/">Messenger</a> 
          </div>
        <hr></hr>
          <div className="list-item">
            <a className="list-item">Copy Link</a>
          </div>
        <hr></hr>
          <div className="list-item">
           <a className="list-item">Embed</a>
          </div>
        <hr></hr>
      </section>
    </div>
  )
}

module.exports = Share