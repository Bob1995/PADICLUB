import{browser, promise, element, by} from 'protractor'

describe('Validation of Sign Up functionality', function(){
        it('Validation of Sign Up functionality', function(){

                console.log('Open the sign up page from globalsqa website');
                browser.get('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/register');

                var firstName = 'test';
                var lastName = 'name';
                var userName = 'testname';
                var password = 'test123';

                console.log('Entering text in first name field');
                element(by.xpath('//input[@id="firstName"]')).sendKeys(firstName);

                console.log('Entering text in last name field');
                element(by.xpath('//input[@name="lastName"]')).sendKeys(lastName);

                console.log('Entering text in username field');
                element(by.xpath('//input[@name="username"]')).sendKeys(userName);

                console.log('Entering text in password field');
                element(by.xpath('//input[@name="password"]')).sendKeys(password);

                element(by.buttonText('Register')).click();

                element(by.binding('flash.message')).getText().then(function(regText){
                        console.log('this is regText '+ regText);
                        expect(regText).toEqual('Registration successful');
                });
              
        });
});