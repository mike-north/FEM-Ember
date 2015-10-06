import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgName = this.modelFor('org').id;
    return $.get(`https://api.github.com/orgs/${orgName}/repos`);
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});
