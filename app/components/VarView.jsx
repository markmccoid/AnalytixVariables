var React = require('react');

var VarView = React.createClass({
	edit: function(e) {
		e.preventDefault();
		alert('this is e: ' + e.target);
		console.dir(e);
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
		let outputNames = varListView.map((obj, idx) =>  {
			//No vars for group all
			if (obj.group === 'All') {
				return null;
			}
			let calloutClass = '';
			if (idx % 2 === 0) {
				calloutClass = 'callout warning';
			} else {
				calloutClass = 'callout secondary'
			}

			let reactKey = this.props.qvw + obj.name + idx;
			return (
			<div className={calloutClass} key={reactKey}>
				<div className="row" >
				    <div className="medium-4 columns">
				      <label>Variable Name
				        <input type="text" placeholder="Variable Name" defaultValue={obj.name} />
				      </label>
				    </div>
				    <div className="medium-8 columns">
				      <label>Description
				        <input type="text" placeholder="Variable Description" defaultValue={obj.description} />
				      </label>
				    </div>
				</div>
				<div className="row">
				    <div className="medium-12 columns">
				      <label>Expression
				        <textarea placeholder="Variable Expression" defaultValue={obj.value}></textarea>
				      </label>
				    </div>
				</div>
				<div className="row">
					<div className="medium-12 columns">
					<span>
						<button className="button small" onClick={this.edit}>Edit</button>
					</span>
					</div>
				</div>
			</div>);
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