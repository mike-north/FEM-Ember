import Ember from 'ember';

export default Ember.Route.extend({
actions: {
  error(jqXhr/*, transition, route*/) {
    if (jqXhr.status === 404) {
      this.intermediateTransitionTo('org.notfound');
      return true;
    } else {
      return false; // Don't enter error substate
    }
  }
},
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}`).then(raw => {
      raw.oldId = raw.id;
      raw.id = raw.login;
      return raw;
    });
  }
});
