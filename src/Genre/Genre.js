import React, { Component } from 'react';
import axios from 'axios';
import GenreItems from './GenreItems';
import './Genre.css';

class Genre extends Component {
	constructor(props) {
		super(props);
		this.state = { genreList: [] };
	}
	async componentDidMount() {
		let genres = await axios.get(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
		);
		this.setState({ genreList: genres.data.genres });
	}

	render() {
		let genresList = this.state.genreList.map((item) => {
			return <GenreItems title={item.name} id={item.id} />;
		});

		return (
			<div>
				<h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '3rem', textAlign: 'center' }}>
					Choose A Genre
				</h1>
				<h2 className="Genre-items">{genresList}</h2>
			</div>
		);
	}
}
export default Genre;
