import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['query', 'page'],
	query: '',
	page: '1'
});
