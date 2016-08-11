var React = require('react');
var jsonData = require('../variables.js');
var Navbar = require('Navbar');

var Main = React.createClass({

	render: function() {
		return (
			<div>
				<Navbar />
				<div className="row">
				{this.props.children}
				</div>
			</div>
		);
	}
});

module.exports = Main;