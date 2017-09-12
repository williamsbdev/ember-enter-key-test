import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['searchQuery'],
    searchQuery: null,
    actions: {
        search() {
            let searchValue = this.get('model.searchValue');
            if(searchValue === '') {
                searchValue = null;
            }
            this.set('searchQuery', searchValue);
        }
    }
});
