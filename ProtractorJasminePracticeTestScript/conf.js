var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
	directConnect : true,
	 seleniumAddress: 'http://localhost:4444/wd/hub',
	// chromeDriver:'D:\Protractor\ProtractorDemo\lib\chromedriver.exe',
	framework: 'jasmine2',
	specs: ['./src/test/javascript/e2e/suites/tablecontent/specs/tablecontent_spec.js'],
	multiCapabilities: [{
		'browserName': 'chrome',
	
	  },{'browserName': 'firefox'}],

	onPrepare: function () {
		browser.driver.manage().window().maximize(),
			jasmine.getEnv().addReporter(new HtmlReporter({
				baseDirectory: 'beautifulTestReporter',
				screenshotsSubfolder: 'images',
				jsonsSubfolder: 'jsons',
				docTitle: 'Sample demo ',
				docName: 'sample.html',
			}).getJasmine2Reporter());
	},
	jasmineNodeOpts: {
		
	}
}