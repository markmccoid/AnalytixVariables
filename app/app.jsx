var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router'); //ES6 destructuring

var Main = require('Main');
var About = require('About');
var Display = require('Display');
var Help = require('Help');
var EditVar = require('EditVar');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// //quick jQuery plugin to keep heights the same on fields
// (function($) {

//     $.fn.equalHeights = function() {
//         var maxHeight = 0,
//             $this = $(this);

//         $this.each( function() {
//             var height = $(this).innerHeight();

//             if ( height > maxHeight ) { maxHeight = height; }
//         });

//         return $this.css('height', maxHeight);
//     };

//     // auto-initialize plugin
//     $('[data-equal]').each(function(){
//         var $this = $(this),
//             target = $this.data('equal');
//         $this.find(target).equalHeights();
//     });

// })(jQuery);


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