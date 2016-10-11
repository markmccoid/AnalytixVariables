var React = require('react');
var VarsAPI = require('VarsAPI');
var { connect } = require('react-redux');
var actions = require('actions');

var VarList = React.createClass({
	getInitialState: function () {
		return ({
			editing: false,
			idToEdit: ''
		})
	},
	edit: function(id, e) {
		e.preventDefault();
		//set state so that variable to edit will be shown
		this.setState({editing: true, idToEdit: id});
		//this.props.location.state = '/edit?id=' + id;
	},
	cancel: function(e) {
		e.preventDefault();
		this.setState({editing: false, idToEdit: ''})
	},
	save: function(e){
		e.preventDefault();
		//This function is being passed from Display.jsx
		var newVarValues = {
				newVarName: this.refs.varName.value,
				newVarDescription: this.refs.varDescription.value,
				newVarExpression: this.refs.varExpression.value,
			};
		//this.props.onVarSave(this.state.idToEdit, newVarValues);
		this.props.dispatch(actions.updateVariableFile(this.state.idToEdit, newVarValues));
		this.setState({editing: false, idToEdit: ''});
	},
//================================
	render: function() {
		//varData is an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
		//let varListView = this.props.varListView;
		let varData = this.props.variables.varData;
		let	searchText = this.props.searchText;
		let	groupSelected = this.props.variables.groupSelected;

		let {editing, idToEdit} = this.state;
		console.log(`VarList - Editing: ${editing} with Search Text of ${searchText}`);

		let outputNames = VarsAPI.filterVars(varData, searchText, groupSelected).map((obj, idx) =>  {

			//No vars for group all
			if (obj.group === 'All') {
				return null;
			}
			let calloutClass = '';
			if (idx % 2 === 0) {
				calloutClass = 'callout warning';
			} else {
				calloutClass = 'callout secondary';
			}

			let jsxOutput = '';
			if (editing && idToEdit == obj.ID) {
			//if (false ) {

				jsxOutput =
				<div className={calloutClass} key={obj.ID} id={obj.ID} >
				<div className="row" >
				    <div className="medium-4 columns">
				      <label className="value-label">Variable Name</label>
				        <input type="text" placeholder="Variable Name" defaultValue={obj.name} ref="varName"/>

				    </div>
				    <div className="medium-8 columns">
				      <label className="value-label">Description</label>
				        <input type="text" placeholder="Variable Description" defaultValue={obj.description} ref="varDescription"/>

				    </div>
				</div>
				<div className="row">
				    <div className="medium-12 columns">
				      <label className="value-label">Expression</label>
				        <textarea placeholder="Variable Expression" defaultValue={obj.value} ref="varExpression"></textarea>

				    </div>
				</div>
				<div className="row">
					<div className="medium-12 columns">
					<span className="btn-padding">
						<button className="button small" onClick={this.save}>Save</button>
					</span>
					<span className="btn-padding">
						<button className="button small" onClick={this.cancel}>Cancel</button>
					</span>
					</div>
				</div>
			</div>
			} else {
				jsxOutput =
			    <div className={calloutClass} key={obj.ID} id={obj.ID} >
			    <div className="row" >
			    <h5 className="float-left padleftright">Group: {obj.group} </h5>
			    <h5 className="float-right padleftright">{obj.locked===true ? "Locked" : ""} </h5>
			    </div>
	                <div className="row" >
	                    <div className="medium-4 columns">
	                      <p className="value-label">Variable Name:</p>
	                        <p className="value-view">{obj.name} </p>

	                    </div>
	                    <div className="medium-8 columns">
	                      <p className="value-label">Description: </p>
	                      <p className="value-view">{obj.description}</p>
	                    </div>
	                </div>
	                <div className="row">
	                    <div className="medium-12 columns">
	                        <p className="value-label">Expression</p>
	                        <p className="value-view">{obj.value}</p>
	                    </div>
	                </div>
	                <div className="row">
	                    <div className="medium-12 columns">
	                    <span>
	                        <button className="button small" onClick={(event) => this.edit(obj.ID, event)}>Edit</button>
	                    </span>
	                    </div>
	                </div>
	            </div>;
	        }

			return (jsxOutput);
		});

		let headerText = '';
		if (varData.length > 0) {
			headerText = <h3>Variables for group {groupSelected}</h3>;
		}
		return (
			<div>
				{headerText}
				<div>
					{outputNames}
				</div>
			</div>
		);
	}
});

export default connect(
	(state) => {
		return state;
})(VarList);

	//OLD Object Keys way of getting info from Array until I realized it was an array!!s
		// var outputNames = Object.keys(data).map((key) =>  {
		// 	//No vars for group all
		// 	if (data[key].group === 'All') {
		// 		return null;
		// 	}
		// 	return (<li> {data[key].name} </li> )
		// });
