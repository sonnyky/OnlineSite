/// <reference path="./tsUnit.ts" />
/// <reference path="../profilePage.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var languageTests;
(function (languageTests_1) {
    // import M = require('../profilePage');
    //  var  FizzBuzz = M.profilePage.profilePageClass;
    var target = new profilePage.profilePageClass();
    var languageTests = (function (_super) {
        __extends(languageTests, _super);
        function languageTests() {
            _super.apply(this, arguments);
        }
        languageTests.prototype.languageStringsReturnModes = function () {
            this.areIdentical('english', target.changeLanguage('english'));
            this.areIdentical('japanese', target.changeLanguage('japanese'));
            this.areIdentical('indonesian', target.changeLanguage('indonesian'));
        };
        return languageTests;
    })(tsUnit.TestClass);
    languageTests_1.languageTests = languageTests;
})(languageTests || (languageTests = {}));
//# sourceMappingURL=languageTest.js.map