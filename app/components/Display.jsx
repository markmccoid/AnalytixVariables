var React = require('react');
var GroupSelect = require('GroupSelect');
var jsonData = require('../variables.js');

var Display = React.createClass({
	getInitialState: function() {
		//vars will be an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
	    return {
	        vars: [],
	        qvw: ''
	    };
	},
	buildGroupList: function (data) {

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
		
		return groupListDistinct;
		// //function to create option list
		// var filteredGroup = groupListDistinct.map(function(arrItem){
		// 	let output = '';
		// 	let groupName = arrItem;
		// 	output = <option value={groupName}>{groupName}</option>;
		//   	return (output);
		// });
		// //Checking to see if the this.state.groupSelected is in the current groups list.
		// //this is so that if changing the varList (like from SalesFlash to Common), we reset
		// //the groupSelecte to "All".
		// if( !groupListDistinct.includes(currentGroupSelected) ) {
		// 	this.setState({groupSelected: "All"});
		// console.log('GroupSelect: cgs - ' + currentGroupSelected);
		// }
		// return (
		// 	<select onChange={this.groupChange} value={this.state.groupSelected} ref="groupSelect"> 
		// 		{filteredGroup} 
		// 	</select>
		// 	);
	},
	loadVars: function(qvw) {
		//Gets one section *Salesflash* of variables and set the state.
		var varData = [];
		var qvwName = '';

		if (qvw == 'common') {
			varData = jsonData.Variables.COMMON;
			qvwName = 'Common';
		} else if (qvw == 'salesflash') {
			varData = jsonData.Variables.SALESFLASH;
			qvwName = 'Salesflash';
		} else if (qvw == 'advertising') {
			varData = jsonData.Variables.ADVERTISINGANALYTIX;
			qvwName = 'Advertising Analytix';
		}
				
		this.setState({vars: varData, qvw: qvwName, groupList: this.buildGroupList(varData)});
	},
	componentDidMount: function () {
		var qvw = this.props.location.query.qvw;

		if (qvw && qvw.length > 0) {
			this.loadVars(qvw);
			window.location.hash = '#/'; //clear location from url
		}
	},
	componentWillReceiveProps: function (newProps) {
		var qvw = newProps.location.query.qvw;

		if (qvw && qvw.length > 0) {
			this.loadVars(qvw);
			window.location.hash = '#/'; //clear location from url
		}
	},
	render: function () {
		console.log('Display: Render' + this.state.qvw);
		return (
			<div>
				<h2>Display </h2>
				<GroupSelect varList={this.state.vars} groupList={this.state.groupList} qvw={this.state.qvw}/>

			</div>
		);
	}
});

module.exports = Display;