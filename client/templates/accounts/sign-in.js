Template.signIn.events({
    "submit [data-action=sign-in]": function(e) {

        var $form = $(e.target);
        if($form[0].valid) {

            var email = $form.find("#email").val();
            var pass = $form.find("#password").val();

            Meteor.loginWithPassword(email, pass, function(error) {
                if (error) {
                    GlobalUI.toast(error.reason);
                } else {
                    Router.go("home");
                }
            });
        }
    }
});