var loginPage = require('./../../login/pageobjects/login_pageobjects')
var logADivePage = require('./../pageobjects/logADive_pageobjects')
//var logoutPage = require('./../pageobjects/logout_pageobjects')
var padiClubUrl = "https://clubqa.padiww.com"
describe('Padi club Information', function () {

	var loginObject = new loginPage()
	var logADiveObject = new logADivePage()
	//var logoutObject = new logoutPage()

	beforeAll(function () {

		browser.get(padiClubUrl, 300000)

	})


	it('login functions Login with valid Data', function () {
		try {
			loginObject.loginInfo("sharad2124gaikwad@gmail.com", "Sharad2124", "Yes", "Yes")
			loginObject.login()
			var currentUrl = browser.getCurrentUrl()
			expect(currentUrl).toBe('https://clubqa.padiww.com/#!/activity_feed')
		} catch (err) {
			console.log(err)
		}
	})
	it('logADive functions to fill Dive info', function () {
		try {
			logADiveObject.openLogDive()
			logADiveObject.selectDiveType("Recreational", "None")
			logADiveObject.enterTitle("I am New")
			logADiveObject.writeCaption("Hello I am there")
			logADiveObject.selectDateAndTime("14 December 2016")
			logADiveObject.selectTime("11", "11", "AM")
			logADiveObject.enterDuration("90")
			browser.sleep(3000)
			logADiveObject.depth(0,24, 20)
			browser.sleep(5000)
			logADiveObject.sightingSelect(2)
			browser.sleep(3000)
			logADiveObject.sightingSelect(3)
			browser.sleep(3000)
			logADiveObject.temperature(65,70,75)
			browser.sleep(3000)
			logADiveObject.visibility(150)
			browser.sleep(3000)
			logADiveObject.wavesCheck("mediumWaves")
			browser.sleep(3000)
			logADiveObject.swellCheck("strongSurge")
			browser.sleep(3000)
			logADiveObject.currentCheck("lightCurrent")
			browser.sleep(3000)
			logADiveObject.exposure("exposureWetsuit")
			browser.sleep(3000)
			logADiveObject.gas("gasTrimix")
			browser.sleep(3000)
			logADiveObject.cylinder("tankPSI", "12", "20")
			browser.sleep(3000)
			logADiveObject.tankMaterial("tankAluminum")
			browser.sleep(3000)
			logADiveObject.saveLog()
			browser.sleep(3000)
		} catch (err) {
			console.log(err)
		}
	})


})