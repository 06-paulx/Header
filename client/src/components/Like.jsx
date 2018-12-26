import React from 'react';
import LikeList from './LikeList.jsx'

var Like = ({show, handleClose, handleChange, handleCreateClick, saveList}) => {
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
          <div>
            {saveList.map((item) => 
              <LikeList 
                value={item}
                />
            )}
          </div> 
      </section>
    </div>
  )
}

module.exports = Like;