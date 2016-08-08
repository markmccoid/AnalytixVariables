var React = require('react');
var jsonData = require('../variables.js');
var GroupSelect = require('GroupSelect');

var Main = React.createClass({
	getInitialState: function() {
		//vars will be an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
	    return {
	        vars: []
	    };
	},
	loadVars: function() {
		//Gets one section *Salesflash* of variables and set the state.
		var salesFlash = jsonData.Variables.SALESFLASH;
		this.setState({vars: salesFlash});
	},
	render: function() {
		return (
			<div>
				<button onClick={this.loadVars}>Load Salesflash Vars</button>
				<button onClick={this.loadVars}>Load AdvertisingAnalytix Vars</button>
				<GroupSelect varList={this.state.vars} />
			</div>
		);
	}
});

module.exports = Main;