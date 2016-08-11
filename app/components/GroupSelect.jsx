var React = require('react');
var VarView = require('VarView');

var GroupSelect = React.createClass({
//getInitialState
	getInitialState: function() {
		return {
			groupSelected: "All",
			currentGroups: []
		}
	},
//FUNCTION - renderNames
	renderNames: function(key) {
		var group = this.props.varList[key].group,
			name = this.props.varList[key].name,
			value = this.props.varList[key].value,
			description = this.props.varList[key].description,
			locked = this.props.varList[key].locked;
			var message = `Group: ${group}, Name: ${name}, value: ${value}`;

		return (
				<div>
					<li><strong>Group:</strong> {group}</li>
					<li><strong>Name:</strong> {name}</li>
					<li><strong>Value:</strong> {value}</li>
				</div>
				);
	},
//FUNCTION - groupChange	
	groupChange: function(e) {
		this.setState({groupSelected: e.target.value});
	},
	// componentDidUpdate: function () {
	
	// 	//Checking to see if the this.state.groupSelected is in the current groups list.
	// 	//this is so that if changing the varList (like from SalesFlash to Common), we reset
	// 	//the groupSelecte to "All".
	// 	if( !this.state.currentGroups.includes(this.state.groupSelected) ) {
	// 		this.setState({groupSelected: "All"});
	// 	console.log('GroupSelect: cgs - ' + this.state.groupSelected);
	// 	}

	// },
//FUNCTION - displayGroups	
	displayGroups: function(){		
		//function to create option list
		let groupListDistinct = this.props.groupList;
		var filteredGroup = groupListDistinct.map(function(arrItem, idx){
			let output = '';
			let groupName = arrItem;
			output = <option value={groupName} key={idx}>{groupName}</option>;
		  	return (output);
		});
		//Checking to see if the this.state.groupSelected is in the current groups list.
		//this is so that if changing the varList (like from SalesFlash to Common), we reset
		//the groupSelecte to "All".
		// if( !groupListDistinct.includes(currentGroupSelected) ) {
		// 	this.setState({groupSelected: "All"});
		// console.log('GroupSelect: cgs - ' + currentGroupSelected);
		// }
		return (
			<label>Variable Groups for {this.props.qvw}
			<select onChange={this.groupChange} value={this.state.groupSelected} ref="groupSelect"> 
				{filteredGroup} 
			</select>
			</label>
			);
	},
//RENDER
	render: function() {
		//varList is an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
		var varList = this.props.varList;
		
		console.log('GroupSelect: ' + this.state.groupSelected + ' ' + this.props.qvw)
		//using ES6 arrow function so that "this" stays bound to correct context
		var conditionalDisplay = () => {
			if (varList.length > 0) {
				return (this.displayGroups());
			}
		};
		return (
			<div>
				<h3>Select Variable Group</h3>
				{conditionalDisplay()}
				<VarView group={this.state.groupSelected} varListView={varList} qvw={this.props.qvw}/>
			</div>
		);
	}
});

module.exports = GroupSelect;