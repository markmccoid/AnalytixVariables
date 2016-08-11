var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); //ES6 destructuring

var Main = require('Main');
var About = require('About');
var Display = require('Display');
var Help = require('Help');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app css - there is an alias in webpack config pointing to app.css called applicationStyles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>  
  		<Route path="about" component={About}/>
  		<IndexRoute component={Display}/>
  	</Route>
  </Router>,
  document.getElementById('json')
);


// ReactDOM.render(
// 	<Main />, 
// 	document.getElementById('json')
// );