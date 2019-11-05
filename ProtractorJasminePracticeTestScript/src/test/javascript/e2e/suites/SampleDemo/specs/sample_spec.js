//import sample_pagaobject.js and sampleData.js .
var samplePage = require('./../pageObjects/sample_pageobjects')
var sampleDataPage = require('./../../../../../../main/resources/testData/sampleData')
var using = require('jasmine-data-provider')
describe('angularjs homepage todo list', function () {
    var samplePageObject = new samplePage()
    var angularJsUrl = "https://angularjs.org"
    using(sampleDataPage.todoInput, function (data) {
        // this is sample demo test script.
        it('should add a todo', function () {
            //opening browser.
            browser.get(angularJsUrl,20000)
            //entering value in text box
            samplePageObject.addTodo(data.textInput)
            //adding to todolist.
            samplePageObject.clickOnAddButton()
            expect(samplePageObject.todoList.count()).toEqual(3);
            expect(samplePageObject.todoList.get(2).getText()).toEqual(data.expectedOutput);
        })
    })

})