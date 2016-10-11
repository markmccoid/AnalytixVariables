var React = require('react');
var GroupSelect = require('GroupSelect');
var VarView = require('VarView');

var VarsAPI = require('VarsAPI');

//var jsonData = require('../variables.js');
//var jsonData = require('../../variablesWID.js');
//the json! uses the json-loader package to load json into a JavaScript object
var jsonData = require('json!../variablesWID.json');

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// // -START TESTING LOADING XML EXPORTING JSON------
// var js2xmlparser = require("js2xmlparser");



// var parseString = require('xml2js').parseString;
// var xml = " <SalesFlash> <SalesFlashVariables>	<Variable>vSC_date_CalendarYearField</Variable>	<Expression>=IF(vSC_DateType='INSERT', 'Insert_CalendarYear' ,  IF(vSC_DateType='POSTING',  'Posting_CalendarYear', 'Create_CalendarYear'))</Expression>	<Usage>Selection Criteria Tab</Usage>	<Notes>This variable will be used in the CalendarYear list box and will change the field based on the value in the vSC_DateType field</Notes>		<Group>Dynamic Date Selection</Group>		<Locked>true</Locked>	 " +
// "	<Variable>Test</Variable>	<Expression>Test X</Expression>	<Usage>Selection Criteria Tab</Usage>	<Notes>This variable will be used in the CalendarYear list box and will change the field based </Notes>		<Group>Dynamic Date Selection</Group>		<Locked>true</Locked>	</SalesFlashVariables>	</SalesFlash>";

// var xmlToJsonReturn;
// parseString(xml, {explicitChildren: true}, function (err, result) {
// 	//console.dir(result);
// 	xmlToJsonReturn = result;
// });
// console.dir (xmlToJsonReturn);
// console.log(js2xmlparser("SalesFlash", xmlToJsonReturn));
// //console.dir (jsonData);
// // -END TESTING LOADING XML EXPORTING JSON------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-


var Display = React.createClass({
	propTypes: {
		vars: React.PropTypes.array.isRequired,
		qvw: React.PropTypes.string //Not sure if it is required yet
	},
	getInitialState: function() {
		//vars will be an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
	    return {
	    	filteredVars: this.props.vars,
	      groupList: this.buildGroupList(this.props.vars),
				groupSelected: 'All',
				searchString: ''
		};
	},
//==========================
	componentDidMount: function () {
		console.log('componentDidMount: ');
//	window.location.hash = '#/'; //clear location from url
	},
//==========================
	componentWillReceiveProps: function (newProps) {
		console.log('componentWillReceiveProps: ');
//		window.location.hash = '#/'; //clear location from url - This causes some issues, think it is because I'm setting state after clearing the url
	},
//==========================
	onVarSave: function (id, newVarValues) {
		let varData = [];
		let { qvw, vars } = this.props;

		if (qvw == 'common') {
			varData = jsonData.Variables.COMMON;
		} else if (qvw == 'salesflash') {
			varData = jsonData.Variables.SALESFLASH;
		} else if (qvw == 'advertising') {
			varData = jsonData.Variables.ADVERTISINGANALYTIX;
		}
		//Filtering vars state variable to only get the one of the id being edited.
		vars.filter(obj => obj.ID == id)
			.forEach(obj => {
				obj.name = newVarValues.newVarName;
				obj.description = newVarValues.newVarDescription;
				obj.value = newVarValues.newVarExpression;
			});
console.log(varData);
console.log('In OnVarSave - DISPLAY');
console.log(`ID: ${id} -- NewVals= ${newVarValues.newVarName}`);
	},
//==========================
	groupChange: function(e) {
		//this.setState({groupSelected: e.target.value});
		this.filterVars(this.props.vars, '', e.target.value);
	},
//==========================
	onSearchChange: function (searchString) {
		console.log("Display: " + searchString);
		//this.setState({searchString: searchString});
		this.filterVars(this.props.vars, searchString, this.state.groupSelected);
		console.log("DisplayRE: " + searchString);
	},
//==========================
	filterVars: function (varData, searchText, groupSelected) {
		//return this.props.vars;
		const newFilteredVars = VarsAPI.filterVars(varData, searchText, groupSelected);
		this.setState({
				filteredVars: newFilteredVars,
				groupSelected: groupSelected,
				searchString: searchText
			});
	},
//==========================
	buildGroupList: function (data) {
console.log('Display: loadVars');

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

	},
//==========================
	loadVars: function(qvw) {
		//Gets one section *Salesflash* of variables and set the state.
		var varData = [];
		var qvwName = '';

console.log('Display: loadVars: ' + qvw);

		if (qvw == 'common') {
			varData = jsonData.Variables.COMMON;
			qvwName = 'common';
		} else if (qvw == 'salesflash') {
			varData = jsonData.Variables.SALESFLASH;
			qvwName = 'salesflash';
		} else if (qvw == 'advertising') {
			varData = jsonData.Variables.ADVERTISINGANALYTIX;
			qvwName = 'advertising';
		}

		this.setState({vars: varData, qvw: qvwName, groupList: this.buildGroupList(varData), groupSelected:"All"});
	},
//==========================
	render: function () {
		console.log('Display: Render-' + this.props.qvw  + ' : ' + this.state.groupSelected);
		console.log('---------------------------------');

		return (
			<div className="callout primary">
				<GroupSelect varList={this.props.vars} groupList={this.state.groupList} groupSelected={this.state.groupSelected}
							 qvw={this.props.qvw} groupChange={this.groupChange} onSearchChange={this.onSearchChange}
							 searchString={this.state.searchString} />

				<VarView group={this.state.groupSelected} varListView={this.state.filteredVars} qvw={this.props.qvw} onVarSave={this.onVarSave}/>
			</div>
		);
	}
});

module.exports = Display;
