var React = require('react');
var { connect } = require('react-redux');

import GroupSelect from 'GroupSelect';
import VarList from 'VarList';

var VarsAPI = require('VarsAPI');

var Display = React.createClass({
// 	onVarSave: function (id, newVarValues) {
// 		let varData = [];
// 		let { qvw, vars } = this.props;

// 		if (qvw == 'common') {
// 			varData = jsonData.Variables.COMMON;
// 		} else if (qvw == 'salesflash') {
// 			varData = jsonData.Variables.SALESFLASH;
// 		} else if (qvw == 'advertising') {
// 			varData = jsonData.Variables.ADVERTISINGANALYTIX;
// 		}
// 		//Filtering vars state variable to only get the one of the id being edited.
// 		vars.filter(obj => obj.ID == id)
// 			.forEach(obj => {
// 				obj.name = newVarValues.newVarName;
// 				obj.description = newVarValues.newVarDescription;
// 				obj.value = newVarValues.newVarExpression;
// 			});
// console.log(varData);
// console.log('In OnVarSave - DISPLAY');
// console.log(`ID: ${id} -- NewVals= ${newVarValues.newVarName}`);
// 	},
	render: function () {
		var { variables, searchText } = this.props;
		return (
			<div className="callout primary">
				<GroupSelect onSearchChange={this.onSearchChange} />

				<VarList />
			</div>
		);
	}
});

export default connect(
	(state) => {
		return state;
})(Display);
