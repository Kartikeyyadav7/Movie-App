import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './TopRated.css';

class TopRatedMovies extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listMovies: []
		};
	}
	async componentDidMount() {
		let movies = await Axios.get(
			`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env
				.REACT_APP_API_KEY}&language=en-US&page=1&region=US`
		);
		const getMovies = movies.data.results;
		const movieItems = getMovies.map((items) => {
			return {
				id: items.id,
				title: items.title,
				poster: items.poster_path
			};
		});
		console.log(movieItems);
		this.setState({
			listMovies: movieItems
		});
	}
	render() {
		const moviesList = this.state.listMovies.map((items) => {
			return (
				<div className="TopRated-Main">
					<div className="TopRated-container">
						<img
							alt="movies"
							src={`https://image.tmdb.org/t/p/w200/${items.poster}`}
							className="TopRated-img"
						/>
						<div className="TopRated-content">
							<h1 className="TopRated-title">{items.title}</h1>
							<Link exact to={`/toprated/movies/${items.id}`} className="TopRated-link">
								Know More
							</Link>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div className="TopRated-Main">
				<h1
					className="TopRated-title"
					style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '3rem', textAlign: 'center' }}
				>
					Top Rated
				</h1>
				<h2>{moviesList} </h2>
			</div>
		);
	}
}
export default TopRatedMovies;
