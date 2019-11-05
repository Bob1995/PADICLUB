var loginPage = require('./../pageobjects/login_pageobjects')
var logoutPage = require('./../pageobjects/logout_pageobjects')
var loginDataPage = require('./../../../testData/padiLoginData')
var using = require('jasmine-data-provider');
var padiClubUrl = "https://clubqa.padiww.com"
describe('Padi club Information', function () {

	var loginObject = new loginPage()
	var logoutObject = new logoutPage()
	browser.get(padiClubUrl, 30000)
	using(loginDataPage.loginInformation, function (data) {
		it('login functions Login with valid Data', function () {
			try {

				loginObject.loginInfo(data.emailId, data.password, data.showPassword, data.rememberMe)
				loginObject.login()
				var currentUrl = browser.getCurrentUrl()
				expect(currentUrl).toBe(data.expectedUrl)
				logoutObject.logout()
			} catch (err) {
				console.log(err)
			}
		})
	})



})