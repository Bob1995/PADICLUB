/** 
 * Constroctor to get table values. 
 */
var tableinfo = function () {
	this.columnData
	//Text box for serach value.
	this.search = element(by.model('searchValue'))
	//Button for add user information. 
	this.addUserButton = element(by.buttonText('Add User'))
	//Text box for user details and credintials.
	this.firstName = element(by.name('FirstName'))
	this.lastName = element(by.name('LastName'))
	this.userName = element(by.name('UserName'))
	this.password = element(by.name('Password'))
	//Radio button for choose customerType.
	this.customerRadio = element.all(by.repeater('option in column.options'))
	//Drop down for select roleType.
	this.roleSelect = element.all(by.options('c.Value as c.Text for c in column.options'))
	//Text box for user contact details.
	this.email = element(by.name('Email'))
	this.mobileNo = element(by.name('Mobilephone'))
	//Button for save user information.
	this.saveButton = element(by.buttonText('Save'))
	//Button for edit user information.
	this.editButton = element.all(by.buttonText('Edit'))
	//Button for delete user information.
	this.deleteButton = element.all(by.css('[ng-click="delUser()"]'))
	//Button for confirm to delete information. 
	this.okButton = element(by.buttonText('OK'))
	//Get all the rows in table body.
	this.row = element.all(by.repeater('dataRow in displayedCollection'))
	//Get the table header row.
	this.tableHeader = element.all(by.tagName('th'))

	/**
	 * @local
	 * Function for get column value/data.	
	 * @param{type,type} [var, var]- Row index number and column index number for get column value.
	 * @return{type} return column value.   
	 */
	this.columnValue = function (rowNo, columnNo) {
		this.columnData = this.row.get(rowNo).all(by.repeater('column in columns')).get(columnNo)
		return this.columnData
	}
	/**
	 * @local
	 * Function for perform click on addUser button.	
	 */
	this.addUser = function () {
		this.addUserButton.click()
	}
	/**
	 * @local
	 * Function for write user personal information in text field.	
	 * @param{type,type,type,type} [var,var,var,var]- enter data for First Name,Last Name,User Name,Password.  
	 */
	this.userInfo = function (first_Name, last_Name, user_Name, password_Value) {

		this.firstName.sendKeys(first_Name)
		this.lastName.sendKeys(last_Name)
		this.userName.sendKeys(user_Name)
		this.password.sendKeys(password_Value)
	}
	/**
	 * @local
	 * Function for perform select roleType from drop down.	
	 * @param{type} [var]- index number of dropdown list.  
	 */
	this.role = function (roleSelectnumber) {
		this.roleSelect.get(roleSelectnumber).click()
	}
	/**
	 * @local
	 * Function for perform choose customer Type from radio button.	
	 * @param{type} [var]- index number of  radion button.  
	 */
	this.customerType = function (customerRadionumber) {
		this.customerRadio.get(customerRadionumber).click()
	}
	/**
	 * @local
	 * Function for write user contact information in text field.	
	 * @param{type,type} [var,var]- enter email Id and mobile number.  
	 */
	this.contactDetails = function (email_Id, mobile_No) {
		this.email.sendKeys(email_Id)
		this.mobileNo.sendKeys(mobile_No)
	}
	/**
	 * @local
	 * Function for perform click on edit button.	
	 * @param{type} [var]- index number of edit button.  
	 */
	this.editInfo = function (editButtonnumber) {
		this.editButton.get(editButtonnumber).click()
	}
	/**
	 * @local
	 * Function for update user First name in text field.	
	 * @param{type} [var]- enter new  First Name.  
	 */
	this.editFistName = function (first_Name) {
		this.firstName.clear()
		this.firstName.sendKeys(first_Name)
	}
	/**
	 * @local
	 * Function for update user Last Name in text field.	
	 * @param{type} [var]- enter new last name.  
	 */
	this.editLastName = function (last_Name) {
		this.lastName.clear()
		this.lastName.sendKeys(last_Name)
	}
	/**
	 * @local
	 * Function for update user userName in text field.	
	 * @param{type} [var]- enter new UserName.  
	 */
	this.editUserName = function (user_Name) {
		this.userName.clear()
		this.userName.sendKeys(user_Name)
	}
	/**
	 * @local
	 * Function for update user password.
	 * @param{type} [var]- enter new password.  
	 */
	this.editPassword = function (pass) {
		this.password.clear()
		this.password.sendKeys(pass)
	}
	/**
	 * @local
	 * Function for update user customerType information.
	 * @param{type} [var]- choose new customer type. 
	 */
	this.editCustomerType = function (customerRadionumber) {
		this.customerRadio.get(customerRadionumber).click()
	}
	/**
	 * @local
	 * Function for update user roleType information.	
	 * @param{type} [var]-select new role.  
	 */
	this.editRole = function (roleSelectnumber) {
		this.roleSelect.get(roleSelectnumber).click()
	}
	/**
	 * @local
	 * Function for update user email Id information.	
	 * @param{type} [var]- new email Id.  
	 */
	this.editEmail = function (email_Id) {
		this.email.clear()
		this.email.sendKeys(email_Id)
	}
	/**
	 * @local
	 * Function for update user mobile number information.	
	 * @param{type} [var]- new mobile number.  
	 */
	this.editMobileNo = function (mobile_No) {
		this.mobileNo.clear()
		this.mobileNo.sendKeys(mobile_No)
	}
	/**
	 * @local
	 * Function for get perticular row.	
	 * @param{type} [var]- row index number.  
	 */
	this.getRows = function (rownumber) {
		this.row.get(rownumber)
	}
	/**
	 * @local
	 * Function for get perticular user information from table.	
	 * @param{type} [var]- row index number to get text user information.  
	 */
	this.getRowsText = function (rownumber) {
		this.row.get(rownumber).getText()
	}
	/**
	 * @local
	 * Function for delete user information from table.	
	 * @param{type} [var]- row index number to delete row.  
	 */
	this.deleteInfo = function (deleteButtonnumber) {
		this.deleteButton.get(deleteButtonnumber).click()
	}
	/**
	 * @local
	 * Function for searchin information from table.	
	 * @param{type} [var]- data for search.  
	 */
	this.searchInfo = function (searchvalue) {
		this.search.sendKeys(searchvalue)
	}
}
module.exports = tableinfo