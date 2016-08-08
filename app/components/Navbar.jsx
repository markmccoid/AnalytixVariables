var React = require('react');


var Navbar = React.createClass({
	render: function() {
		return (
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text"> React Weather App</li>
						<li>
							<IndexLink to="/varview?qvw=SF" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>SalesFlash </IndexLink>
						</li>
						<li>
							<Link to="/varview?qvw=AA" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Advertising Analytix </Link>
						</li>
						<li>
							<Link to="/varview?qvw=CA" activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Contracts Analytix </Link>
						</li>			
					</ul>
				</div>
			</div>
		);
	}
})