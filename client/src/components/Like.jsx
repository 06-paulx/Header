import React from 'react';
import LikeList from './LikeList.jsx'
import LikeSummary from './LikeSummary.jsx'

var Like = ({show, handleClose, handleChange, handleCreateClick, saveList, url, location, stars, reviews, description}) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClassName}>
      <section className='like-main'>
        <button onClick={handleClose}>
          Close
        </button>
        <h1 className="save-to-list">Save to list</h1>
        <div className="create-new-list">
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
          <section>
            {saveList.map((item) => 
              <LikeList 
                value={item}
                />
            )}
          </section> 
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