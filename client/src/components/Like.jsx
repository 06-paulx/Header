import React from 'react';

var Like = ({show, handleClose}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='modal-main'>
        modal 
        <button onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  )
}

module.exports = Like;