Meteor.startup(function() {
	Inject.rawModHtml("addUnresolved", function(html) {
		html = html.replace('<body>', '<body unresolved fit layout vertical>');
		return html;
	});
});