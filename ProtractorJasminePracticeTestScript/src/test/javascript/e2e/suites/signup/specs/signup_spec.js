var signUpPage=require('./../pageobjects/signup_pageobjects')
var padiClubUrl = "https://clubqa.padiww.com"
describe('Padi club signup Information', function () {

	var signUpObject = new signUpPage()
	browser.get(padiClubUrl)
	it('sign up functions with all field filling', function () {
		try {
			signUpObject.signUp()
			signUpObject.selectCountry("INDIA")
			//browser.sleep(2000)
			signUpObject.userInfo("shara", "gaik")
			signUpObject.emailInfo("sharadegai@gmail.com", "Sharad@212", "Sharad@212", "Ye")
			//  browser.sleep(3000)
			signUpObject.dateOfbirth(30, 10, 1990)
			signUpObject.selectagreeTermsAndCondition()
			signUpObject.submitSignup()
			var currentUrl = browser.getCurrentUrl()
			expect(currentUrl).toBe('https://clubqa.padiww.com/#!/activity_feed')
			browser.sleep(5000)
		} catch (err) {
			console.log(err)
		}

	})
	
})