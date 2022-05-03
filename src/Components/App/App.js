import {Route,Switch,NavLink} from 'react-router-dom';
import MovieApp from '../Movie/MovieApp';
import MoviePage from '../Movie/MoviePage';
import MovieDetailsPage from '../Movie/MovieDetailsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/" exact className="link"> Home </NavLink>
        <NavLink to="/movies" className="link"> Movie </NavLink>
      </div>
      <Switch>
        <Route path='/' exact component={MovieApp} />
        <Route path="/movies" exact component={MoviePage}/>
        <Route path="/movies/:movieId" component={MovieDetailsPage}/>
      </Switch>
    </div>
  );
}

export default App;
