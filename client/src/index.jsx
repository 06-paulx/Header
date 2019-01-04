import App from './components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

var listingId = window.location.pathname.slice(1);
console.log(listingId)
ReactDOM.render(<App id = {listingId}/>, document.getElementById('header'));