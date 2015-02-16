Router.configure({
  autoRender: false
  , autoStart: false
});

//public routes
PublicController = RouteController.extend({
  layoutTemplate: "publicLayout"
  , loadingTemplate: "loading"
});

Router.route("/about", {
  controller: "PublicController"
});

Router.route("/sign-in", {
  name: "accounts.signIn"
  , template: "signIn"
  , controller: "PublicController"
});

Router.route("/sign-up", {
  name: "accounts.signUp"
  , template: "signUp"
  , controller: "PublicController"
});

Router.route("/sign-out", {
  action: function() {
      Meteor.logout(function() {
        Router.go("/");
      })
  }
});

Router.route("/", {
  name: "home"
  , action: function() {
    if (Meteor.user()) {
      this.layout("dashboardLayout");
      this.render("onboarding");
    } else {
      this.layout("publicLayout");
      this.render("home");
    }
  }
});

//dashboard routes
DashboardController = RouteController.extend({
  layoutTemplate: "dashboardLayout"
  , loadingTemplate: "loading"
  , onBeforeAction: function() {
      if (Meteor.loggingIn())
        this.render("loading");
      else if (Meteor.user())
        this.next();
      else
        this.redirect("/");
    }
});