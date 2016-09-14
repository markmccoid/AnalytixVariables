var React = require('react');
var GroupSelect = require('GroupSelect');
//var jsonData = require('../variables.js');
//var jsonData = require('../../variablesWID.js');
//the json! uses the json-loader package to load json into a JavaScript object
var jsonData = require('json!../variablesWID.json');

//-----TESTING START LOADING XML EXPORTING JSON------
var js2xmlparser = require("js2xmlparser");



var parseString = require('xml2js').parseString;
var xml = " <SalesFlash> <SalesFlashVariables>	<Variable>vSC_date_CalendarYearField</Variable>	<Expression>=IF(vSC_DateType='INSERT', 'Insert_CalendarYear' ,  IF(vSC_DateType='POSTING',  'Posting_CalendarYear', 'Create_CalendarYear'))</Expression>	<Usage>Selection Criteria Tab</Usage>	<Notes>This variable will be used in the CalendarYear list box and will change the field based on the value in the vSC_DateType field</Notes>		<Group>Dynamic Date Selection</Group>		<Locked>true</Locked>	 " +
"	<Variable>Test</Variable>	<Expression>Test X</Expression>	<Usage>Selection Criteria Tab</Usage>	<Notes>This variable will be used in the CalendarYear list box and will change the field based </Notes>		<Group>Dynamic Date Selection</Group>		<Locked>true</Locked>	</SalesFlashVariables>	</SalesFlash>";

var xmlToJsonReturn;
parseString(xml, {explicitChildren: true}, function (err, result) {
	//console.dir(result);
	xmlToJsonReturn = result;
});
console.dir (xmlToJsonReturn);
console.log(js2xmlparser("SalesFlash", xmlToJsonReturn));
//console.dir (jsonData);
//-----TESTING END LOADING XML EXPORTING JSON------


var Display = React.createClass({
	getInitialState: function() {
		//vars will be an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
	    return {
	        vars: [],
	        groupList: [],
	        qvw: '',
			groupSelected: 'All',
			searchString: ''  
		};
	},
//==========================	
	componentDidMount: function () {
		var qvw = this.props.location.query.qvw;
console.log('componentDidMount: ' + qvw);

		if (qvw && qvw.length > 0) {
			this.loadVars(qvw);
//			window.location.hash = '#/'; //clear location from url
		}
	},
//==========================	
	componentWillReceiveProps: function (newProps) {
		var qvw = newProps.location.query.qvw;

console.log('componentWillReceiveProps: ' + qvw);

		if (qvw && qvw.length > 0) {
			this.loadVars(qvw);
//			window.location.hash = '#/'; //clear location from url - This causes some issues, think it is because I'm setting state after clearing the url 
		}
	},
//==========================
	groupChange: function(e) {
		this.setState({groupSelected: e.target.value});
	},	
//==========================	
	onVarSave: function (id, newVarValues) {
		let varData = [];
		let { qvw, vars } = this.state;

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
	onSearchChange: function (searchString) {
		console.log("Display: " + searchString);
		this.setState({searchString: searchString});

		console.log("DisplayRE: " + searchString);
	},
//==========================	
	render: function () {
		console.log('Display: Render-' + this.state.qvw  + ' : ' + this.state.groupSelected);
		console.log('---------------------------------');
console.groupEnd();		
		return (
			<div className="callout primary">
				<GroupSelect varList={this.state.vars} groupList={this.state.groupList} groupSelected={this.state.groupSelected} 
							 qvw={this.state.qvw} groupChange={this.groupChange} onVarSave={this.onVarSave} onSearchChange={this.onSearchChange}
							 searchString={this.state.searchString}/>
			</div>
		);
	}
});

module.exports = Display;