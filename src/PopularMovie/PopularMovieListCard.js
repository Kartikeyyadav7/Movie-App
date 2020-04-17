import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieListCard.css';

class PopularMovieListCard extends Component {
	render() {
		const { id, title, poster } = this.props;
		return (
			<div className="MovieListCard-Main">
				<div className="MovieListCard-container">
					<img alt="movies" src={`https://image.tmdb.org/t/p/w200/${poster}`} className="MovieListCard-img" />
					<div className="MovieListCard-content">
						<h1 className="MovieListCard-title">{title}</h1>
						<Link exact to={`/movies/${id}`} className="MovieListCard-link">
							Know More
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default PopularMovieListCard;
