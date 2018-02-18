import Ember from 'ember';
import App from '../app';

App.Item = Ember.Object.extend();

App.Item.reopenClass({
	all( query, page ) {
		page = page ? page : '1';
		
		if ( !query )
		{
			let result;
			
			result = $.getJSON( 'http://api.themoviedb.org/3/discover/movie?api_key=72b56103e43843412a992a8d64bf96e9&page=1&language=ru&query=' + query )
					.then( ( data ) => {
					return data;
			});
			
			if ( result )
			{
				return result;
			}
		}
		
		return $.getJSON( 'http://api.themoviedb.org/3/search/movie?api_key=72b56103e43843412a992a8d64bf96e9&language=ru&query=' + query + '&page=' + page )
			.then( ( data ) => {
				return data;
			});
	}
});


export default Ember.Route.extend( {
	model( attr ) {
		return App.Item.all( attr.query, attr.page );
	}
} );

