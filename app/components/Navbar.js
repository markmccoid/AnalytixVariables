var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

//var {Link, IndexLink} = require('react-router');

var Navbar = React.createClass({
	render: function() {
		var {dispatch} = this.props;

		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text"> Analytix Variable Editor</li>
						<li>
							<a onClick={() => {
										dispatch(actions.getVariableFile('SalesFlash'));
									}
								}>
								SalesFlash
							</a>
						</li>
						<li>
							<a onClick={() => {
										dispatch(actions.getVariableFile('Advertising'));
									}
								}> Advertising Analytix </a>
						</li>
						<li>
							<a onClick={() => {
										dispatch(actions.getVariableFile('Common'));
									}
								}> Common Variables </a>
						</li>
					</ul>
				</div>
				<div className="top-bar-right">
					<ul className="menu">
						<li>
							About
						</li>
					</ul>
				</div>
			</div>
		);
	}
});

export default connect()(Navbar);
