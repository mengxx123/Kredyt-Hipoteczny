window.KredytView = Backbone.View.extend({
  
  initialize: function(){
    this.render();
  },
  
  render: function(){
      var kredytRender = this.template({label: 'Wziety kredyt', value: '3333' });
      
      // Load the compiled HTML into the Backbone "el"
      $(this.el).html( kredytRender );
      $(this.el).find('fieldset').append(new TableView({model: this.model}).el);
      
      return this;
  }    
});