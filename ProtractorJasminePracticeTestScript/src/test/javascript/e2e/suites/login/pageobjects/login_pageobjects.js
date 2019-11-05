var LoginpageObject = function () {
	// This is login tab
	this.loginTab = $('[heading="sign up"]')
	// This is sign up tab
	this.signupTab = element(by.id('signupTab'))
	//Login credintial text box.
	this.loginId = element(by.model('user.username'))
	this.loginPassword = element(by.model('user.password'))
	//show password button.
	this.show_password = $('[ng-show="displayLoginShow"]')
	//hide password button.
	this.hide_password = $('[ng-hide="displayLoginShow"]')
    //remember me button.
	this.rememberMe = element(by.model('enabled'))
	//forgot password link.
	this.forgotPassword = $('[ng-click="forgot();"]')
	this.userIdForgot = element(by.model('user.userIdForgot'))
	this.resetPassword = element(by.buttonText('Reset Password'))
	//singup link.
	this.signUpLink = $('[ng-click="selectTab(1);"]')
	//login button.
	this.loginButton = element(by.buttonText('Log in'))
	//close error tab.
	this.dismissButton = $('[ng-click="dg.dismiss()"]')
	this.loginFaildMessage = $('[class="ng-binding"]')
	
	/**
	 * Function for loing.
	 * @param{type,type,type}[var,var,var]-login id,password,password to show Yes/No,remember me or disable me.
	 */
	try {
		this.loginInfo = function (login_Id, login_Password, showPassword, disabledMe) {
			this.loginId.sendKeys(login_Id)
			this.loginPassword.sendKeys(login_Password)
			if (showPassword == "Yes") {
				this.show_password.click()
			}
			if (disabledMe == "Yes") {
				this.rememberMe.click()
			}
		}
	} catch (error) {

	}
	this.login = function () {
		this.loginButton.click()
	}
}
module.exports = LoginpageObject