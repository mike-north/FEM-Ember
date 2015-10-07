import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions: {
    ['fav-button-clicked']() {
      this.sendAction('on-favorite-click', this.get('org'));
    }
  }
});
