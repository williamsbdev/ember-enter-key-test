import { test } from 'qunit';
import moduleForAcceptance from 'ember-enter-key-test/tests/helpers/module-for-acceptance';

moduleForAcceptance('Integration | application');

test('application allows searching of users', (assert) => {
    visit('/');
    andThen(() => {
        assert.equal(currentURL(), '/');
        assert.equal(find('li').length, 3);
        fillIn('#users-search', 'or');
        triggerEvent('#users-search', 'keyup');
    });
    andThen(() => {
        assert.equal(currentURL(), '/?searchQuery=or');
        assert.equal(find('li').length, 2);
    });
});
