import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  addToFavorites(org) {
    this.get('items').addObject(org);
    console.log(this.get('items').map(x => x.id).join(', '));
  }
});
