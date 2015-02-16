Template.dashboardLayout.helpers({
	currentEmail: function() {
		return Meteor.user() ? Meteor.user().emails[0].address : "";
	}
	, narrow: function() {
		return Session.get("drawer-panel-narrow");
	}
});

Template.dashboardLayout.events({
	"core-responsive-change [data-drawer-panel]": function (e) {
		Session.set("drawer-panel-narrow", e.originalEvent.detail.narrow);
	}
	, "click [data-action=toggle-drawer]": function(e) {
		$("[data-drawer-panel]")[0].togglePanel();
	}
	, "click paper-item": function (e) {
		$("[data-drawer-panel]")[0].closeDrawer();
	}
	, "click [data-action=sign-out]": function(e) {
		Meteor.logout(function() {
		  Router.go("/");
		});
	}
});