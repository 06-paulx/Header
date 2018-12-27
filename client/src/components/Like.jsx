import React from 'react';
import LikeList from './LikeList.jsx'
import LikeSummary from './LikeSummary.jsx'

var Like = ({ show, handleClose, handleChange, handleCreateClick, saveList, url, location, stars, reviews, description, handleCreateNewListClick, handleCancelClick}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='like-main'>
        <button onClick={handleClose}>
          Close
        </button>
        <h1 className="save-to-list">Save to list</h1>
        <button id="create-new-list" onClick={handleCreateNewListClick}>
          Create New List 
        </button>
        <div>
          <div id="add-form">
            Name
            <div className="add-new-list">
              <input id= "name-your-list" onChange={handleChange} placeholder="Name your list"></input>
            </div>
            <button id="create-button" onClick={handleCreateClick}>
              Create
              </button>
            <button className="cancel-button" onClick={handleCancelClick}>
              Cancel
              </button>
            </div>
            </div>
          <div className="like-list">
            {saveList.map((item) => 
              <LikeList 
                value={item}
                />
            )}
          </div> 
          <div>
            <LikeSummary 
              url={url}
              location={location}
              stars={stars}
              reviews={reviews}
              description={description}
              />
          </div>
      </section>
    </div>
  )
}

module.exports = Like;