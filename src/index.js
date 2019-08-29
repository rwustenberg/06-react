import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Places.css';
import Places from './components/Places';
import * as serviceWorker from './serviceWorker';
// import favourites from './components/favourites';
// import './styles/favourites.css';



ReactDOM.render(<Places />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
