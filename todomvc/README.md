### Notes

####libraries used

    jquery
    ember
    ember-data
    handlebars
    localstorage_adapter

####creating application

    window.App = Ember.Application.create();

####specify storeage adapter

  fixture adapter

    App.ApplicationAdapter = DS.FixtureAdapter.extend();

  local storage adapter
  use https://raw.github.com/rpflorence/ember-localstorage-adapter/master/localstorage_adapter.js

    App.ApplicationAdapter = DS.LSAdapter.extend({
      namespace: 'app-name-space'
    });


####create router

    // root route to application
    App.Router.map(function(){
      this.resource('resource_name', {
        path: '/'
      });
    });


    // add the index route handler
    // eg: using todos as resource_name
    App.TodosRoute = Ember.Route.extend({
      model: function() {
        return this.store.find('todo');
      }
    });

    // nested route under resource_name
    App.Router.map(function(){
      this.resource('resource_name', {
        path: '/'}
        , function() {
          this.route('subroute');
        }
      )
    });

    // index route
    App.TodosIndexRoute = Ember.Route.extend({
      model: function() {
        return this.modelFor('todos');
      }
    });


    // add the route handler to sub_route
    App.TodosSubrouteRoute = Ember.Route.extend({
      model: function() {
        return this.store.filter('todo', function() {
          // condition
        });
      },


      renderTemplate: function(controller) {
        this.render('todos/index', {
          controller: controller
        });
      }
    });

####controllers

  controller can have actions and properties

  two type of controllers are ArrayController and ObjectController

    App.Todos.TodoController = Ember.ObjectController.extend({
      actions: {
        removeTodo: function() {
          // logic to remove todo
        }
      },


      isFinished: function() {
        var todo = this.get('model');
        return todo.get('isDone');
      }.property('model.isDones'),
      isDone: false
    });

####model

      // we can specify the data type of the fields
      App.Todo = DS.Model.extend({
          title: DS.attr('string'),
          isCompleted: DS.attr('boolean')
      });

####views

  views are helpers which need to be regusterd in handlebard to use

    App.EditTodoView = Ember.TextField.extend({
      didInsertElement: function() {
          this.$().focus();
      }
    });
    Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);

  here we created a new helper which can be used in handlebar template

    {{edit-todo class="edit" value=title focus-out="acceptChanges" insert-newline="acceptChanges"}}

####Handle bar template

    <script type="text/x-handlebars" data-template-name="todos">content goes here</script>
