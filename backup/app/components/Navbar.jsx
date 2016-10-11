var React = require('react');
//var {Link, IndexLink} = require('react-router');

var Navbar = React.createClass({
	render: function() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text"> Analytix Variable Editor</li>
						<li>
							<a onClick={()=> {return this.props.fnloadVariableFile('SalesFlash');}}>SalesFlash </a>
						</li>
						<li>
							<a href="#"> Advertising Analytix </a>
						</li>
						<li>
							<a href="#"> Common Variables </a>
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

module.exports = Navbar;