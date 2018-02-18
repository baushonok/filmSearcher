import Ember from 'ember';

export default Ember.Service.extend({
	init() {
		return $.getJSON( 'http://api.themoviedb.org/3/discover/movie?api_key=72b56103e43843412a992a8d64bf96e9&page=1&language=ru' )
			.then( ( data ) => {
				return data;
		});
	},
	search( query, page ){
		let result;

		page = page ? page : '1';

		result = $.getJSON( 'http://api.themoviedb.org/3/search/movie?api_key=72b56103e43843412a992a8d64bf96e9&language=ru&page=' + page + '&query=' + query )
			.then( ( data ) => {
				return data;
		});

		if ( result )
		{
			return result;
		}

		return this.get( 'init' );
	},
	getById: function (options, callback) {
		let result;

		result = $.getJSON( 'http://api.themoviedb.org/3/movie/' + options.id + '?api_key=72b56103e43843412a992a8d64bf96e9&language=ru')
			.then( ( data ) => {
				callback(data);
		});
    },
});
