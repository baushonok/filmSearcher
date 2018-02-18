import Ember from 'ember';
// import FoundMoviesController from '../controllers/found-movies';
import MovieInformationComponent from './movie-information';

export default Ember.Component.extend({
	// foundMoviesController: new FoundMoviesController(),
	movieInformationComponent: new MovieInformationComponent(),

	actions: {
		click(event) {
			// this.foundMoviesController.test(event.target.id);
			this.movieInformationComponent.open(event.target.id);
		}
	}
});
