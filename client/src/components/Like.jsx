import React from 'react';
import LikeList from './LikeList.jsx'
import LikeSummary from './LikeSummary.jsx'

var Like = ({ show, handleClose, handleChange, handleCreateClick, saveList, url, location, stars, reviews, description, handleCreateNewListClick, handleCancelClick}) => {
  const showHideClassName = show ? 'm-modal display-block' : 'm-modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='m-like-main'>
        <button className="m-close-button" onClick={handleClose}>
        </button>
        <h1 className="m-save-to-list">Save to list</h1>
        <button id="create-new-list" onClick={handleCreateNewListClick}>
          Create New List 
        </button>
        <div>
          <div id="add-form">
            Name
            <div className="m-add-new-list">
              <input id= "name-your-list" onChange={handleChange} placeholder="Name your list"></input>
            </div>
            <button id="create-button" onClick={handleCreateClick}>
              Create
              </button>
            <button className="m-cancel-button" onClick={handleCancelClick}>
              Cancel
              </button>
            </div>
            </div>
          <div className="m-like-list">
            {saveList.map((item) => 
              <LikeList 
                value={item}
                />
            )}
          </div> 
      </section>
          <div className="m-like-summary-section">
            <LikeSummary 
              url={url}
              location={location}
              stars={stars}
              reviews={reviews}
              description={description}
              />
          </div>
    </div>
  )
}

module.exports = Like;