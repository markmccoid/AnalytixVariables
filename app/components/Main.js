var React = require('react');
var { connect } = require('react-redux');

import Navbar from 'Navbar';
import Display from 'Display';

var Main = React.createClass({
	render: function() {
		const variables = this.props.variables;
		let displayComponent = undefined;
		//Checking to see if varData array exists -- May be better way to do this.
		if (variables.varData !== undefined) {
			displayComponent = <Display/>;
		}
		return (
			<div>
				<Navbar />
				<div className="row">
					{displayComponent}
				</div>
			</div>
		);
	}
});

export default connect(
	(state) => {
		return {
			variables: state.variables
		};
	})(Main);
