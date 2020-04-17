import React, { Component } from 'react';
import Axios from 'axios';
import './MovieCard.css';

class MovieCard extends Component {
	constructor(props) {
		super(props);
		this.state = { eachMovie: {} };
	}
	async componentDidMount() {
		let movies = await Axios.get(
			`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env
				.REACT_APP_API_KEY}&language=en-US`
		);

		this.setState({
			eachMovie: {
				title: movies.data.title,
				overView: movies.data.overview,
				released: movies.data.release_date,
				tagLine: movies.data.tagline,
				poster: movies.data.poster_path,
				backgroundImg: movies.data.backdrop_path
			}
		});
	}
	render() {
		let { title, overView, released, tagLine, poster } = this.state.eachMovie;
		return (
			<header className="MovieCard-main">
				<div className="MovieCard-container">
					<img src={`https://image.tmdb.org/t/p/w400/${poster}`} alt={title} className="MovieCard-img" />
					<div className="MovieCard-container-content">
						<h1 className="MovieCard-container-title">{title}</h1>
						<h2 className="MovieCard-container-tagline">{tagLine}</h2>
						<h2 className="MovieCard-container-releasedate">{`Release Date : ${released}`}</h2>
						<h3 className="MovieCard-container-overview">Overview: {overView}</h3>
						<button onClick={this.props.history.goBack} className="MovieCard-btn">
							GO Back
						</button>
					</div>
				</div>
			</header>
		);
	}
}
export default MovieCard;
