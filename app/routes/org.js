import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}`).then(raw => {
      raw.oldId = raw.id;
      raw.id = raw.login;
      return raw;
    });
  }
});
