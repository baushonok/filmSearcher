import Ember from 'ember';

export function loopFor([params]/*, hash*/) {
  console.log( params );
  return params;
}

export default Ember.Helper.helper(loopFor);
