var fakeModel = {
  description: 'Feed the Dog',
  completed: false,
  id: _.uniqueId('id')
}
 
var Todo = Backbone.Model.extend();
 
var TodoView = Backbone.View.extend({
 
  className: 'todo-item',
  renderTemplate: _.template($('.todo-template').text()),
 
  events: {
    "click .js-done": "toggleDone"
  },
 
  initialize: function(){
    console.log('YoBro');
    $('.todo-items').prepend( this.el )
    this.render()
 
    this.listenTo(this.model, 'change', this.render)
  },
 
  render: function(){
    this.$el.html(this.renderTemplate(this.model.attributes))
  },
 
  toggleDone: function(){
    this.model.set('completed', !this.model.get('completed'))
  }
 
})
var modelInstance = new Todo(fakeModel)
var view = new TodoView( { model: modelInstance } )