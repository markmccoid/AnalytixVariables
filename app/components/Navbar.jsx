var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navbar = React.createClass({
	render: function() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text"> Analytix Variable Editor</li>
						<li>
							<IndexLink to="/?qvw=salesflash" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>SalesFlash </IndexLink>
						</li>
						<li>
							<Link to="/?qvw=advertising" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Advertising Analytix </Link>
						</li>
						<li>
							<Link to="/?qvw=common" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Common Variables </Link>
						</li>	
					</ul>
				</div>					
				<div className="top-bar-right">
					<ul className="menu">
						<li>
							<Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </Link>
						</li>		
					</ul>
				</div>
			</div>
		);
	}
});

module.exports = Navbar;