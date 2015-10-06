import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let repoId = params.idd;
    let org = this.modelFor('org');
    return $.get(`https://api.github.com/repos/${org.id}/${repoId}`).then(raw => {
      raw.oldId = raw.id;
      raw.id = raw.name;
      return raw;
    });
  }
});
