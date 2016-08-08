var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); //ES6 destructuring


ReactDOM.render(
	<Main />, 
	document.getElementById('json')
);