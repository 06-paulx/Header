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
          <li className="list-item">Facebook</li>
          <hr></hr>
          <li className="list-item">Twitter</li>
          <hr></hr>
          <li className="list-item">Email</li>
          <hr></hr>
          <li className="list-item">Messenger</li>
          <hr></hr>
          <li className="list-item">Copy Link</li>
          <li className="list-item">Embed</li>
          <hr></hr>
      </section>
    </div>
  )
}

module.exports = Share