import React, {useState} from 'react';
import MovieAppDisplay from './MovieAppDisplay/MovieAppDisplay';

//TODO src\components\apps\the-movie-db\MovieApp.js
// *  Line 24:118:  'query' is not defined      no-undef
// *  Line 35:17:   'setResult' is not defined  no-undef

const MovieApp = () => {
    const [result, setResult] = useState()
    const [query, setQuery] = useState('');

    const fetcher = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=7098e11e2958eb684a3d3d8315e4cc41&language=en-US&query=${query}&page=1&include_adult=false`)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('fetch error');
                } else return res.json();
            })
            .then(json => {
                if (json.results.length === 0) {
                    throw new Error('no results');
                } else {
                    const movieNum = Math.floor(Math.random() * json.results.length);
                    setResult(json.results[movieNum]);
                    console.log(json.results[movieNum])
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="main">
            <div className="mainDiv">
                <input value={query} onChange={(e) => setQuery(e.target.value)} />
                <button onClick={fetcher}>Click for Movie Pic Search</button>
                {!result || !result.poster_path ? null : <MovieAppDisplay movie={result} />}
            </div>
        </div>
    )
}


export default MovieApp;