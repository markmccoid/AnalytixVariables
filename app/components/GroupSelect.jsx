var React = require('react');
var VarView = require('VarView');

var Display = React.createClass({
//getInitialState
	getInitialState: function() {
		return {
			groupSelected: "All"
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
//FUNCTION - displayGroups	
	displayGroups: function(){
		var data = this.props.varList;

		//Create "All" element so that we have a way to show all variables
		var allElement = {group: "All"};
		data.unshift(allElement); //unshift (add as first element in array) "All" on to object array 

		//array.filter will call this to return distinct group names from data array
		var makeDistinct = function(value, idx, arr){
		  	if(idx > 0){
		    	if (value === arr[idx-1]) {
		      		return false;
		    	} else {
		      		return true;
		    	}
		  	} else {
		    	return true;
		  	}
		};

		//Get a list of group names from data (array of objects) and sort them
				//let groupList = Object.keys(data).map(key => data[key].group).sort();
		let groupList = data.map(key => key.group).sort();
		
		//Make the groupList distinct
		let groupListDistinct = groupList.filter(makeDistinct);
		
		//function to create option list
		var filteredGroup = groupListDistinct.map(function(arrItem){
			let output = '';
			let groupName = arrItem;
			output = <option value={groupName}>{groupName}</option>;
		  return (output);
		});
		return (
			<select onChange={this.groupChange} value={this.state.groupSelected} ref="groupSelect"> 
				{filteredGroup} 
			</select>
			);
	},
//RENDER
	render: function() {
		//varList is an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
		var varList = this.props.varList;
		var that = this;
		var conditionalDisplay = function() {
			if (varList.length > 0) {
				return (that.displayGroups());
			}
		};
		return (
			<div>
				<h3>Select Variable Group</h3>
				{conditionalDisplay()}
				<VarView group={this.state.groupSelected} varListView={varList} />
			</div>
		);
	}
});

module.exports = Display;