Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});


// use if using DS.FixtureAdapter as ApplicationAdapter
// Todos.Todo.FIXTURES = [{
//     id: 1,
//     title: 'Learn Ember.js',
//     isCompleted: true
// }, {
//     id: 2,
//     title: '...',
//     isCompleted: false
// }, {
//     id: 3,
//     title: 'Pro!',
//     isCompleted: false
// }];