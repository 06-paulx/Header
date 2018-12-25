import React from 'react';

var Like = ({show, handleClose, handleChange, handleCreateClick}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='like-main'>
        <button onClick={handleClose}>
          Close
        </button>
        <h1 className="save-to-list">Save to list</h1>
        <div>
          Create New List 
          <div className="add-new-list">
            <input onChange={handleChange} placeholder="Name your list"></input>
          </div>
          <button className="cancel-button">
            Cancel
            </button>
          <button className="create-button" onClick={handleCreateClick}>
            Create
            </button>
        </div>
        <hr></hr>
        <li className="like-item">New York</li>
        <hr></hr>
        <li className="like-item">Vacation Places</li>
        <hr></hr>
        <li className="like-item">Mobile Starred Listings</li>
        <hr></hr>
        <li className="like-item">Dream Homes</li>

      </section>
    </div>
  )
}

module.exports = Like;