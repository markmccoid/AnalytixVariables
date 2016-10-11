var React = require('react');

var VarView = React.createClass({
	propTypes: {
		group: React.PropTypes.string.isRequired,
		varListView: React.PropTypes.array.isRequired, //Not sure if it is required yet
		onVarSave: React.PropTypes.func.isRequired,
		qvw: React.PropTypes.string.isRequired
	},
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
		this.props.onVarSave(this.state.idToEdit, newVarValues);
		this.setState({editing: false, idToEdit: ''});
	},
//================================
	render: function() {
		//varList is an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
		let varListView = this.props.varListView;
		// //Filter passed varListView so only passed "this.props.group" shows
		// //or is "All" is passed, show all variables
		// let filteredObj = varListView.filter((value, index, arr) => {
		// 		if (value.group === this.props.group || this.props.group === 'All') {
		// 			return true;
		// 		} else {
		// 			return false;
		// 		}
		// });

		//Take filtered list and build output to show.

		let {editing, idToEdit} = this.state;
		console.log('VarView - Editing: '  + editing);
		let outputNames = varListView.map((obj, idx) =>  {

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


			let reactKey = this.props.qvw + obj.name + idx;
			return (jsxOutput);
		});

		let headerText = '';
		if (varListView.length>0) {
			headerText = <h3>Variables for group {this.props.group}</h3>;
		}
console.log('varView: ' + this.props.group);
console.log('---------------------------------');
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

module.exports = VarView;

	//OLD Object Keys way of getting info from Array until I realized it was an array!!s
		// var outputNames = Object.keys(data).map((key) =>  {
		// 	//No vars for group all
		// 	if (data[key].group === 'All') {
		// 		return null;
		// 	}
		// 	return (<li> {data[key].name} </li> )
		// });
