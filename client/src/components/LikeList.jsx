import React from 'react';

var LikeList = ({value}) => { 
  return(
    <div>
      <hr></hr>
      <li className="like-item">{value}</li>
    </div>
  )
}

module.exports = LikeList;