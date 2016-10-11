var React = require('react');
var ReactDOM = require('react-dom');
//var {Route, Router, IndexRoute, hashHistory} = require('react-router'); //ES6 destructuring
var { Provider } = require('react-redux');

import Main from 'Main';

//--Get actions for our initial testing of redux
var actions = require('actions');
//Create our store object
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New State: ', store.getState());
});

//--Test store dispatch function
// store.dispatch(actions.getVariableFile('salesflash'));
// var tempData = store.getState().variables.varData;
// store.dispatch(actions.createGroupList(tempData));
// store.dispatch(actions.setGroupSelected('All'));

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app css - there is an alias in webpack config pointing to app.css called applicationStyles
require('style!css!sass!applicationStyles')

ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>,
	document.getElementById('json')
);

// ReactDOM.render(
//   <Router history={hashHistory}>
//   	<Route path="/" component={Main}>
//   		<Route path="about" component={About}/>
//   		<IndexRoute component={Display}/>
//   	</Route>
//   </Router>,
//   document.getElementById('json')
// );



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
