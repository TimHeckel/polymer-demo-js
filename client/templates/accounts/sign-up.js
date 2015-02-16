Template.signUp.events({
	"submit [data-action=sign-up]": function(e) {
		
		var $form = $(e.target);
		if ($form[0].valid) {

			var email = $form.find("#email").val();
			var password = $form.find("#password").val();

			Accounts.createUser({ email: email, password: password }, function(error) {
				if (error) {
					GlobalUI.toast(error.reason);
				} else {
					Router.go("home");
				}
			});
		}
		
	}
});