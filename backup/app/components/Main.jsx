var React = require('react');
var jsonData = require('../variables.js');
var Navbar = require('Navbar');
var Display = require('Display');
var VarsAPI = require('VarsAPI');

var Main = React.createClass({
	getInitialState: function() {
	    return {
	        variables: [],
	        qvw: ''
	    };
	},
	fnloadVariableFile: function (varFileToLoad) {
		//--------------------------
		//-Function that will be called from Navbar component
		//-to load specific Variable files
		//-Loading of file is done in VarsAPI object
		//--------------------------
		const tmpVariables = VarsAPI.loadVariableFile(varFileToLoad);

		this.setState({
				variables: tmpVariables,
				qvw: varFileToLoad
				});
	},
	render: function() {
		const { variables, qvw } = this.state;
		let displayComponent = undefined;

		if (qvw.length > 0) {
			displayComponent = <Display vars={variables} qvw={qvw}/>;
		}
		return (
			<div>
				<Navbar fnloadVariableFile={this.fnloadVariableFile}/>
				<div className="row">
					{displayComponent}
				</div>
			</div>
		);
	}
});

module.exports = Main;
