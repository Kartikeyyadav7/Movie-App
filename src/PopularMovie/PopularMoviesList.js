import React, { Component } from 'react';
import axios from 'axios';
import PopularMovieListCard from './PopularMovieListCard';

const base_URL = 'https://api.themoviedb.org/3/movie/';
const last_URL = '&language=en-US&page=1';

class PopularMoviesList extends Component {
	constructor(props) {
		super(props);
		this.state = { listMovies: [] };
	}
	async componentDidMount() {
		let movies = await axios.get(`${base_URL}popular?api_key=${process.env.REACT_APP_API_KEY}${last_URL}`);
		let getMovies = movies.data.results;
		const movieItems = getMovies.map((items) => {
			return {
				id: items.id,
				title: items.title,
				votes: items.vote_average,
				summary: items.overview,
				releaseDate: items.release_date,
				poster: items.poster_path
			};
		});
		console.log(getMovies);
		this.setState({
			listMovies: movieItems
		});
	}

	render() {
		const cards = this.state.listMovies.map((m) => (
			<PopularMovieListCard
				key={m.id}
				id={m.id}
				title={m.title}
				votes={m.votes}
				summary={m.summary}
				releaseDate={m.releaseDate}
				poster={m.poster}
			/>
		));
		return (
			<div>
				<h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '3rem', textAlign: 'center' }}>
					POPULAR MOVIES
				</h1>
				<div>{cards}</div>
			</div>
		);
	}
}
export default PopularMoviesList;
