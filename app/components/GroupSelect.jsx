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
//================================
	render: function() {
		//varList is an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
		var varList = this.props.varList;
		
console.log('GroupSelect: ' + this.props.groupSelected + ' ' + this.props.qvw );
console.log('---------------------------------');
		//using ES6 arrow function so that "this" stays bound to correct context
		var conditionalDisplay = () => {
			if (varList.length > 0) {
				return (this.displayGroups());
			}
		};

		//Filter passed varListView so only passed "this.props.group" shows
		//or is "All" is passed, show all variables
		let filteredObj = varList.filter((value, index, arr) => {
				if (value.group === this.props.groupSelected || this.props.groupSelected === 'All') {
					return true;
				} else {
					return false;
				}
		});

		return (
			<div>
				{conditionalDisplay()}
				<VarView group={this.props.groupSelected} varListView={filteredObj} qvw={this.props.qvw}/>
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