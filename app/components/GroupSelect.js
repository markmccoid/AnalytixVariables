var React = require('react');
var { connect } = require('react-redux');

var actions = require('actions');

var GroupSelect = React.createClass({
//================================
	displayGroups: function(groupList, groupSelected, varSetName){
		//function to create option list
		let { dispatch } = this.props;
		var filteredGroup = groupList.map(function(arrItem, idx){
			let output = '';
			let groupName = arrItem;
			output = <option value={groupName} key={idx}>{groupName}</option>;
				return (output);
		});
		return (
			<label><h3>Variable Groups for {varSetName}</h3>
			<select
				onChange={(e) =>
					dispatch(actions.setGroupSelected(e.target.value))
				}
				value={groupSelected}
				ref="groupSelect"
			>
				{filteredGroup}
			</select>
			</label>
			);
	},
//================================
	render: function() {
		//varList is an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
		var { variables, dispatch } = this.props;
		//using ES6 arrow function so that "this" stays bound to correct context
		var conditionalDisplay = () => {
			if (variables.varData.length > 0) {
				return (this.displayGroups(variables.groupList, variables.groupSelected, variables.varSetName));
			}
		};
		return (
			<div>
				<div className="row centered">
					<div className="column small-8 small-offset-1 medium-offset-2">
						{conditionalDisplay()}
					</div>
				</div>
				<div className="row">
					<div className="column small-6 small-offset-1 medium-offset-2">
						<input
							type="text"
							ref="input"
							value={this.props.searchText}
							onChange={() => {
								dispatch(actions.setSearchText(this.refs.input.value));
							}}
						/>
					</div>
					<div className="column small-5 medium-4">
						<a
							onClick={(e) => {
								e.preventDefault();
								dispatch(actions.setSearchText(''));
							}}
							className="medium button">Clear</a>
					</div>
				</div>
			</div>
		);
	}
});

export default connect(
	(state) => {
		return state;
	})(GroupSelect);



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
