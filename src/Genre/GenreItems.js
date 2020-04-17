import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GenreItems.css';

class GenreItems extends Component {
	render() {
		const { title, id } = this.props;
		return (
			<div className="GenreItems-main">
				<div className="GenreItems-container">
					<Link to={`/genres/${id}`}>
						<h1 className="GenreItems-title">{title}</h1>
					</Link>
				</div>
			</div>
		);
	}
}
export default GenreItems;
