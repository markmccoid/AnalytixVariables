var React = require('react');

var VarView = React.createClass({
	//RENDER
	render: function() {
		//varList is an Array of Objects [{name: '', value: '', description: '', notes: '', group: '', locked: true }, {name:...}]
		let varListView = this.props.varListView;
		//Filter passed varListView so only passed "this.props.group" shows
		//or is "All" is passed, show all variables
		let filteredObj = varListView.filter((value, index, arr) => {
				if (value.group === this.props.group || this.props.group === 'All') {
					return true;
				} else {
					return false;
				}
		});

		//Take filtered list and build output to show.
		let outputNames = filteredObj.map((obj, idx) =>  {
			//No vars for group all
			if (obj.group === 'All') {
				return null;
			}
			
			return (
			<div className="callout secondary" key={idx}>
				<div className="row" >
				    <div className="medium-4 columns">
				      <label>Variable Name
				        <input type="text" placeholder="Variable Name" value={obj.name} />
				      </label>
				    </div>
				    <div className="medium-8 columns">
				      <label>Description
				        <input type="text" placeholder="Variable Description" value={obj.description} />
				      </label>
				    </div>
				</div>
				<div className="row">
				    <div className="medium-12 columns">
				      <label>Expression
				        <textarea placeholder="Variable Expression">{obj.value}</textarea>
				      </label>
				    </div>
				</div>
			</div>);
		});

console.log('varView: ' + this.props.group);

		return (
		<div>
			<h2>Variables for group {this.props.group}</h2>
			<form>
				{outputNames}
			</form>
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