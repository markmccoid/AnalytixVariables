var React = require('react');
var jsonData = require('json!../variablesWID.json');
var varData = jsonData.Variables.SALESFLASH;


var About = React.createClass({
	getInitialState: function () {
		return {
			searchString: ''
		}
	},
	doneSearching: function (e) {
		e.preventDefault();
		this.refs.inputForm.reset();
	},
	filterList: function (e) {
		
		this.setState( 
			{
				searchString: this.refs.input.value
			});

	},
	createList: function () {
		const data =
		varData.map(function(item){
			return <p>{item.name}</p>;
		});
		return (data);
	},
	render: function() {
		//Get the new input string from state
		const searchString = this.state.searchString;
		//convert input string to a regular expression object to pass to match function
		let reSearchString = new RegExp(searchString, "g");
		
		let xData = varData;

		
		if (searchString.length > 0) {
			xData = varData.filter(function(item){
				return item.name.toLowerCase().match(reSearchString);
			});
		}
		return (
			<div>
				<h1>About Component Page</h1>
				<form ref="inputForm" onSubmit={this.doneSearching}>
					<input 
						type="text" 
						ref="input"
						value={this.state.searchString}
						onChange={this.filterList}
					/>
					{xData.map(function(item){
						return <p>{item.name} : {item.description}</p>;
						})}
				</form>
			</div>
		);
	}
}) 

module.exports = About;