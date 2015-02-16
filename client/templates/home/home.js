Template.home.rendered = function() {
  document.title = "Differential | Polymer demo";
  return $("<meta>", {
    name: "description",
    content: "Something"
  }).appendTo("head");
};

Template.home.events = {
  'click paper-button': function(evt) {
    return console.log('clicked: ', evt.target);
  }
};