import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import './SearchResult.css';

class SearchResult extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listMovies: []
		};
	}
	async componentDidMount() {
		let movies = await Axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env
				.REACT_APP_API_KEY}&language=en-US&query=${this.props.match.params.name}&page=1`
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
		let moviesList = this.state.listMovies.map((items) => {
			return (
				<div className="SearchResult-Main">
					<div className="SearchResult-container">
						<img
							alt="movies"
							src={`https://image.tmdb.org/t/p/w200/${items.poster}`}
							className="SearchResult-img"
						/>
						<div className="SearchResult-content">
							<h1 className="SearchResult-title">{items.title}</h1>
							<Link exact to={`/search/movies/${items.id}`} className="SearchResult-link">
								Know More
							</Link>
						</div>
					</div>
				</div>
			);
		});
		return (
			<div>
				<h1 className="SearchResult-Main-title" style={{ textAlign: 'center' }}>
					Search Result
				</h1>
				<h1>{moviesList}</h1>
			</div>
		);
	}
}
export default SearchResult;
