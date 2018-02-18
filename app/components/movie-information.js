import Ember from 'ember';
import Themoviedb from '../services/themoviedb';

export default Ember.Component.extend({
	body: document.body,
	filmsService: new Themoviedb(),
	filmDetails: {},

	actions: {
		click() {
			this.get('body').classList.remove( 'open' );
		}
	},

	open: function(id) {
		console.log('controller open, id:', id);
		this.filmsService
			.getById(
				{id : id},
				this.showFilmDetails.bind(this)
			);
	},

	showFilmDetails: function(data) {
		this.filmDetails = data;
		this.get('body').classList.add('open');
		console.log('this.filmDetails', this.filmDetails);
	}
});
