import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange() {
		this.setState({ clicked: !this.state.clicked });
	}
	render() {
		return (
			<nav className="navbar">
				<div class="menu-btn">
					<i className="fas fa-bars fa-1x" onClick={this.handleChange} />
				</div>
				<div className="navbar-container">
					<h1 className="navbar-logo">
						<NavLink exact to="/">
							Movieopedia
						</NavLink>
					</h1>
					<ul className={this.state.clicked ? 'navbar-nav show' : 'navbar-nav'}>
						<li>
							<NavLink exact to="/popular/movies" activeClassName="active-link">
								Popular Movies
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/toprated" activeClassName="active-link">
								Top Rated
							</NavLink>
						</li>
						<li>
							<NavLink exact to="/genres" activeClassName="active-link">
								Genres
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
export default withRouter(Navbar);
