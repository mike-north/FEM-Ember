import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgId = this.modelFor('org').id;
    let repoId = this.modelFor('org.repo').id;
    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/issues`);
  }
});
