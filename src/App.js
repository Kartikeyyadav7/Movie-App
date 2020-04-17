import React from 'react';
import PopularMovieList from './PopularMovie/PopularMoviesList';
import Genre from './Genre/Genre';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieCard from './PopularMovie/MovieCard';
import GenreMovies from './Genre/GenreMovies';
import TopRatedMovies from './Toprated/TopRatedMovies';
import MainPage from './MainPage/MainPage';
import SearchResult from './SearchResult/SearchResult';
import Navbar from './Navbar/Navbar';
import NotFound from './NotFound/NotFound';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/search/:name" component={SearchResult} />
					<Route exact path="/search/movies/:id" component={MovieCard} />
					<Route exact path="/popular/movies" component={PopularMovieList} />
					<Route exact path="/toprated" component={TopRatedMovies} />
					<Route exact path="/toprated/movies/:id" component={MovieCard} />
					<Route exact path="/movies/:id" component={MovieCard} />
					<Route exact path="/genres/movies/:id" component={MovieCard} />
					<Route exact path="/genres" component={Genre} />
					<Route exact path="/genres/:id" component={GenreMovies} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
