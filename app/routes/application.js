import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        searchQuery: {
            refreshModel: true,
            replace: true
        }
    },
    model(params) {
        let allUsers = [
            Ember.Object.create({
                name: 'Toran Billups'
            }),
            Ember.Object.create({
                name: 'Jarrod Taylor'
            }),
            Ember.Object.create({
                name: 'Brandon Williams'
            })
        ];
        let searchValue = params.searchQuery;
        let filteredUsers = [];
        if(searchValue === null) {
            filteredUsers = allUsers;
        } else {
            filteredUsers = allUsers.filter(function(item) {
                return item.get("name").toLowerCase().includes(searchValue);
            });
        }
        return Ember.Object.create({
            searchValue: params.searchQuery,
            users: filteredUsers,
            allUsers: allUsers
        })
    }
});
