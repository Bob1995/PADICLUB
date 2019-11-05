var SignUppageObject = function () {
	// This is login tab
	this.loginTab = $('[heading="log in"]')
	// This is sign up tab
	this.signupTab = $('[heading="sign up"]')
	// country dropdown
	this.countryDropdown = element(by.model('newUser.countryName'))
	// choose certified driver radio button yes 
	this.certifiedYes = $('[ng-click="selectPadiNumber();"]')
	// if driver number known
	this.padiDriverNumber = element(by.model('newUser.padiNumber'))
	this.findMeButton = $('[ng-click="checkPadiNumber(newUser.padiNumber)"]')
	// if driver number forgot
	this.clickHereLink = $('[ng-click="enterPadiNumber()"]')
	this.padiUserFirstName = element(by.model('padiUserFirstname'))
	this.padiUserMiddleInitial = element(by.model('padiUserMiddleInitial'))
	this.padiUserLastName = element(by.model('padiUserLastname'))
	this.padiSearchButton = element(by.id('signup'))
	this.cancelLookupButton = $('ng-click="cancelPadiNumberModal()"')
	//choose certified driver radio button no
	this.certifiedNo = $('[ng-click="unselectPadiNumber();"]')
	// fill the new user information
	this.newUser_firstName = element(by.model('newUser.firstname'))
	this.newUser_lastName = element(by.model('newUser.lastname'))
	this.newUser_emailId = element(by.model('newUser.userId'))
	this.newUser_password = element(by.model('newUser.password'))
	//click on show password 
	this.show_password = $('[ng-show="displaySignupShow"]')
	//click on hide password 
	this.hide_password = $('[ng-hide="displaySignupShow"]')
	this.confirm_password = element(by.model('newUser.confirmPassword'))
	// select date of birth
	this.dayDropdown = element(by.id('day-dropdown'))
	this.daySelect = element.all(by.repeater('days in dayArray'))
	this.monthDropdown = element(by.id('month-dropdown'))
	this.monthSelect = element.all(by.repeater('months in monthArray'))
	this.yearDropdown = element(by.id('year-dropdown'))
	this.yearSelect = element.all(by.repeater('years in yearArray'))
	//select I agree to PADI's  Terms of Service and Privacy Policy
	this.agreePadiBox = element(by.model('ui.acceptTermsCheckBox'))
	//select Receive PADI marketing featuring new product enhancements, offers and special event invitations.
	this.receivedPadiBox = element(by.model('newUser.padiMarketing'))
	//select I choose to receive marketing from PADI partners and be part of positive ocean change with Project AWARE and select third parties.
	this.receiveMarketingBox = element(by.model('newUser.patnerMarketing'))
	//click on sign up button
	this.signUpButton = $('[ng-click="signup()"]')
	//link of login
	this.loginLink = $('[ng-click="selectTab(0);"]')

	/**
	 * @local
	 * Function to perform click on signup tab.	 
	 */
	this.signUp = function () {
		this.signupTab.click()
	}
	/**
	 * @local
	 * Function to perform select country name from dropdown.	 
	 */
	this.selectCountry = function (country_Name) {
		this.countryDropdown.click()
		this.countryName = $("[label=" + country_Name + "]").click()
	}
	/**
	 * @local
	 * Function to perform click on certificate driver if available.
	 */
	this.certifiedDriverYes = function () {
		this.certifiedYes.click()
	}
	/**
	 * @local
	 * Function to enter driver number.
	 * @param{type}[var]- drivere number.
	 */
	this.driverNumber = function (driver_Number) {
		this.padiDriverNumber.sendKeys(driver_Number)
	}
	/**
	 * @local
	 * Function to perform click on clickHere link text.
	 */
	this.clickHere = function () {
		this.clickHereLink.click()
	}
	/**
	 * @local
	 * Function to enter driver number LookUp information.
	 * @param{type,type,type,type,var,var}[var,var,var,var,var,var]- drivere number.
	 */
	this.padiDriverNumberLookUp = function (first_name, middle_initial, last_Name, birth_day, birth_month, birth_year) {
		this.padiUserFirstName.sendKeys(first_Name)
		this.padiUserMiddleInitial.sendKeys(middle_initial)
		this.padiUserLastName.sendKeys(last_Name)
		this.dayDropdown.click()
		this.day = birth_day - 1
		this.daySelect.get(day).click()
		this.monthDropdown.click()
		this.month = birth_month - 1
		this.monthSelect.get(month).click()
		this.yearDropdown.click()
		this.year = birth_year - 2018
		this.yearSelect.get(year).click()
		this.padiSearchButton.click()
	}
	/**
	 * @local
	 * Function to perform click on cancelLookupButton .
	 */
	this.cancelLookup = function () {
		this.cancelLookupButton.click()
	}
	/**
	 * @local
	 * Function to perform click on certifiedNo.
	 */
	this.certifiedDriverNo = function () {
		this.certifiedNo.click()
	}
	/**
	 * @local
	 * Function to enter user personal information.
	 * @param{type,type}[var,var]- enter First Name, Last Name
	 */
	this.userInfo = function (first_Name, last_Name) {
		this.newUser_firstName.sendKeys(first_Name)
		this.newUser_lastName.sendKeys(last_Name)
	}
	/**
	 * @local
	 * Function to enter user email information.
	 * @param{type,type,type}[var,var,var]- enter email Id, password, confirm_pass, showpassword yes or no
	 */
	this.emailInfo = function (email_Id, password, confirm_Pass, showpassword) {
		this.newUser_emailId.sendKeys(email_Id)
		this.newUser_password.sendKeys(password)
		if (showpassword == "Yes") {
			this.show_password.click()
		}
		this.confirm_password.sendKeys(confirm_Pass)
	}
	/**
	 * @local
	 * Function to enter user birth details.
	 * @param{type,type,type}[var,var,var]- enter birth day ,month, year.
	 */
	this.dateOfbirth = function (birth_day, birth_month, birth_year) {
		this.dayDropdown.click()
		this.day = birth_day - 1
		this.daySelect.get(this.day).click()
		this.monthDropdown.click()
		this.month = birth_month - 1
		this.monthSelect.get(this.month).click()
		this.yearDropdown.click()
		this.year = 2018 - birth_year
		this.yearSelect.get(this.year).click()
	}
	/**
	 * @local
	 * Function to perform click on submit button.
	 */
	this.submitSignup = function () {
		this.signUpButton.click()
	}
	/**
	 * @local
	 * Function to perform click on TermsAndCondition check box.
	 */
	this.selectagreeTermsAndCondition = function () {
		this.agreePadiBox.click()
	}
}
module.exports = SignUppageObject