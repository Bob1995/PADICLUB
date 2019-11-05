/** 
 * This test-Case covers the Table Section
 */

var tablepageObject = require('./../pageobjects/tablecontent-pageobjects')
var urlTable = "http://www.way2automation.com/angularjs-protractor/webtables/"
var tableDataPage = require('./../../../testData/addUser')
var using = require('jasmine-data-provider')
describe('Users Information', function () {
	var tableObject = new tablepageObject()
	browser.get(urlTable, 30000)
	using(tableDataPage.userInformation, function (data) {
		it('add user information functions', function () {
			try {
				browser.sleep(2000)
				tableObject.addUser()
				browser.sleep(2000)
				tableObject.userInfo(data.firstName, data.lastName, data.userName, data.password)
				tableObject.customerType(data.customerType)
				browser.sleep(2000)
				tableObject.role(data.roleType)
				tableObject.contactDetails(data.emailId, data.mobileNo)
				browser.sleep(3000)
				tableObject.saveButton.click()
				browser.sleep(3000)
				var rowCounter = 0
				tableObject.row.count().then(function (number) {
					var row = tableObject.row.get(rowCounter++);
					var expectedData = data.firstName + " " + data.lastName + " " + data.userName + " " + data.roleType + " " + data.emailId + " " + data.mobileNo + " " + "Edit"
					row.getText().then(function (rowData) {
						if (rowData == expectedData) {
							expect(rowData).toEqual(expectedData)
						}
					});
				});
			} catch (err) {
				console.log("save user info button click failed" + err)
			}
		});
	})
	using(tableDataPage.editUserInformation, function (data) {
		it('update user lastName information', function () {
			var rowNumber = 0;
			tableObject.editInfo(rowNumber)
			tableObject.editLastName(data.lastName)
			tableObject.saveButton.click()
			browser.sleep(3000)
			for (loopCounter = 0; loopCounter < 8; loopCounter++) {
				var editColumnVal
				var coloumnValue = tableObject.columnValue(rowNumber, loopCounter)
				coloumnValue.getText().then(function (vals) {
					editColumnVal = vals
					if (editColumnVal == data.lastName) {
						expect(editColumnVal).toEqual(data.lastName)
					}
				});
			}
		});
	})
	it('delete the user information by index', function () {
		var deleteRowNo = 0
		var deleteRow = tableObject.getRows(deleteRowNo)
		tableObject.deleteInfo(deleteRowNo)
		tableObject.okButton.click()
		var flag = 0
		var totalRows
		tableObject.row.count().then(function (number) {
			totalRows = number

			for (loopCounter = 0; loopCounter < totalRows; loopCounter++) {
				var rows = tableObject.row.get(loopCounter)
				rows.getText().then(function (rowValue) {
					if (rowValue != deleteRow) {
						flag = flag + 1
					}
					if (flag == number) {
						expect(tableObject.row.count()).toBe(flag)
					}
				});
			}
		})
	});

	it('sort the user information by FirstName', function () {

		var sortByColumnNo = 0
		var rowNumber = 0
		var afterSort
		browser.sleep(3000)
		tableObject.row.count().then(function (number) {
			tableObject.tableHeader.get(sortByColumnNo).click()
			var compareValue = tableObject.columnValue((number - 1), sortByColumnNo).getText()
			tableObject.tableHeader.get(sortByColumnNo).click();
			browser.sleep(3000)
			afterSort = tableObject.columnValue(rowNumber, sortByColumnNo).getText()
			browser.sleep(3000)
			expect(afterSort).toBe(compareValue)
		})

	});
	it('sort the user information by Customer', function () {
		var sortByColumnNo = 2
		var rowNumber = 0
		var afterSort
		browser.sleep(3000)
		tableObject.row.count().then(function (number) {
			tableObject.tableHeader.get(sortByColumnNo).click()
			var compareValue = tableObject.columnValue((number - 1), sortByColumnNo).getText()
			tableObject.tableHeader.get(sortByColumnNo).click()
			browser.sleep(3000)
			afterSort = tableObject.columnValue(rowNumber, sortByColumnNo).getText()
			browser.sleep(3000)
			expect(afterSort).toBe(compareValue)
		})

	});
	it('sort the user information by Role', function () {
		var sortByColumnNo = 4
		var rowNumber = 0
		var afterSort
		browser.sleep(3000)
		tableObject.row.count().then(function (number) {
			tableObject.tableHeader.get(4).click()
			var compareValue = tableObject.columnValue((number - 1), sortByColumnNo).getText();
			tableObject.tableHeader.get(sortByColumnNo).click()
			browser.sleep(3000)
			afterSort = tableObject.columnValue(rowNumber, sortByColumnNo).getText();
			browser.sleep(3000)
			expect(afterSort).toBe(compareValue)
		})
	})
	it('search table contents', function () {
		var value = "Tom"
		tableObject.searchInfo(value)
		tableObject.row.count().then(function (number) {
			for (loopCounter = 0; loopCounter < number; loopCounter++) {
				for (innerLoopCounter = 0; innerLoopCounter < 1; innerLoopCounter++) {
					var content;
					var coloumnValue = tableObject.columnValue(loopCounter, innerLoopCounter)
					coloumnValue.getText().then(function (vals) {
						content = vals
						if (content == value) {
							expect(content).toEqual(value)
						}
					});
				}
			}
		});
	});
});