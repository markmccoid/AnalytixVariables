var React = require('react');

var VarView = React.createClass({
	//RENDER
	render: function() {
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
		let outputNames = filteredObj.map((obj) =>  {
			//No vars for group all
			if (obj.group === 'All') {
				return null;
			}
			return (<li> {obj.name} </li> )
		});


		return (
		<div>
			<h2>Variables for group {this.props.group}</h2>
			<ul>
				{outputNames}
			</ul>
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