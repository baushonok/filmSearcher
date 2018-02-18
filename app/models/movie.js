import Model from 'ember-data/model';

export default Model.extend({
	poster_path: attr(),
	adult: attr(),
	overview: attr()
});
