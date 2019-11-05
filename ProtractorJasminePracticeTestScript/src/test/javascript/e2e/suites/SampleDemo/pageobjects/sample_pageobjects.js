//This is the pageobject for sample Demo
var samplePageObject = function () {
    //Text box for todo
    this.todoText = element(by.model('todoList.todoText'))
    //Button for add todo list
    this.addButton = element(by.css('[value = "add"]'))
    //get todo list
    this.todoList = element.all(by.repeater('todo in todoList.todos'))
    /**
     * Purpose:enter the Input into text box.
     * @param {type}[var]
     */
    this.addTodo = function (todoTextInput) {
        this.todoText.sendKeys(todoTextInput)
    }
    /**
     * Purpose:perform click on add button.
     */
    this.clickOnAddButton = function () {
        this.addButton.click()
    }
}
module.exports = samplePageObject