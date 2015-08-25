/// <reference path="./tsUnit.ts" />
/// <reference path="../profilePage.ts" />

module languageTests {
   // import M = require('../profilePage');
  //  var  FizzBuzz = M.profilePage.profilePageClass;

    var target = new profilePage.profilePageClass();

    export class languageTests extends tsUnit.TestClass {

        languageStringsReturnModes() {
            this.areIdentical('english', target.changeLanguage('english'));
            this.areIdentical('japanese', target.changeLanguage('japanese'));
            this.areIdentical('indonesian', target.changeLanguage('indonesian'));
        }
    }
}