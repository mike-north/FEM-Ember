import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  favorites: inject.service(),

  actions: {
    addOrgToFavorites(org) {
      this.get('favorites').addToFavorites(org);
    }
  },

  model() {
    return [{
      id: "emberjs"
    }, {
      id: "ember-cli"
    }, {
      id: "microsoft"
    }, {
      id: "yahoo"
    }, {
      id: "netflix"
    }, {
      id: "facebook"
    }];
  }
});
