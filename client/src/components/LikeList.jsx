import React from 'react';

var LikeList = ({value}) => { 
  return(
    <div>
      <hr></hr>
      <li className="m-like-item">{value}<img className="m-heart-icon" src="https://image.flaticon.com/icons/svg/149/149217.svg"></img></li>
    </div>
  )
}

module.exports = LikeList;