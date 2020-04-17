import React, { Component } from 'react';
import Axios from 'axios';
import './GenreMovies.css';

import { Link } from 'react-router-dom';

class GenreMovies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			redirect: false
		};
	}
	async componentDidMount() {
		let getMovies = await Axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env
				.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${this.props.match.params
				.id}`
		);
		const movieItems = getMovies.data.results.map((items) => {
			return {
				id: items.id,
				title: items.title,
				votes: items.vote_average,
				summary: items.overview,
				releaseDate: items.release_date,
				poster: items.poster_path
			};
		});
		this.setState({ movies: movieItems, redirect: false });
	}
	render() {
		console.log(this.state.movies);
		let movieItems = this.state.movies.map((items) => {
			return (
				<div className="GenreMovies-Main">
					<div className="GenreMovies-container">
						<img
							alt="movies"
							src={`https://image.tmdb.org/t/p/w200/${items.poster}`}
							className="GenreMovies-img"
						/>
						<div className="GenreMovies-content">
							<h1 className="GenreMovies-title">{items.title}</h1>
							<Link exact to={`movies/${items.id}`} className="GenreMovies-link">
								Know More
							</Link>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div>
				<h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '3rem', textAlign: 'center' }}>
					{' '}
					Movies{' '}
				</h1>
				<h2>{movieItems}</h2>
			</div>
		);
	}
}
export default GenreMovies;
