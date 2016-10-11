var React = require('react');
var VarView = require('VarView');

var GroupSelect = React.createClass({

//================================
	displayGroups: function(){
		//function to create option list
		let groupListDistinct = this.props.groupList;
		var filteredGroup = groupListDistinct.map(function(arrItem, idx){
			let output = '';
			let groupName = arrItem;
			output = <option value={groupName} key={idx}>{groupName}</option>;
		  	return (output);
		});
		return (
			<label>Variable Groups for {this.props.qvw}
			<select onChange={this.props.groupChange} value={this.props.groupSelected} ref="groupSelect">
				{filteredGroup}
			</select>
			</label>
			);
	},
	onSearchChange: function (e) {
		var searchString = this.refs.input.value;

		//Call function on Display component to do searching.
		this.props.onSearchChange(searchString);
	},
	doneSearching: function (e) {
		e.preventDefault();
		this.refs.inputForm.reset();
	},
//================================
	render: function() {
		//varList is an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
		var varList = this.props.varList;
console.group("GroupSelect.jsx");
console.log('GroupSelect: ' + this.props.groupSelected + ' ' + this.props.qvw  + ' : ' + varList.ID);
console.log('---------------------------------');
		//using ES6 arrow function so that "this" stays bound to correct context
		var conditionalDisplay = () => {
			if (varList.length > 0) {
				return (this.displayGroups());
			}
		};

		// //Filter passed varListView so only passed "this.props.group" shows
		// //or is "All" is passed, show all variables
		// let filteredObj = varList.filter((value, index, arr) => {
		// 		if (value.group === this.props.groupSelected || this.props.groupSelected === 'All') {
		// 			return true;
		// 		} else {
		// 			return false;
		// 		}
		// });

		// if (this.props.searchString.length > 0) {
		// 	//convert input string to a regular expression object to pass to match function
		// 	let reSearchString = new RegExp(this.props.searchString, "g");
		// 	filteredObj = filteredObj.filter(function(item){
		// 		return item.name.toLowerCase().match(reSearchString);
		// 	});
		//}
console.groupEnd();
		return (
			<div>
				{conditionalDisplay()}
				<form ref="inputForm" onSubmit={this.doneSearching}>
					<input
						type="text"
						ref="input"
						value={this.props.searchString}
						onChange={this.onSearchChange}
					/>
				</form>

			</div>
		);
	}
});

module.exports = GroupSelect;



// //FUNCTION - renderNames
// 	renderNames: function(key) {
// 		var group = this.props.varList[key].group,
// 			name = this.props.varList[key].name,
// 			value = this.props.varList[key].value,
// 			description = this.props.varList[key].description,
// 			locked = this.props.varList[key].locked;
// 			var message = `Group: ${group}, Name: ${name}, value: ${value}`;

// 		return (
// 				<div>
// 					<li><strong>Group:</strong> {group}</li>
// 					<li><strong>Name:</strong> {name}</li>
// 					<li><strong>Value:</strong> {value}</li>
// 				</div>
// 				);
// 	},
