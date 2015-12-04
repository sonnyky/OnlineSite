/// <reference path="./thirdparty/jquery.d.ts" />
/// <reference path="./util/touchClass.ts" />
// <reference path="./util/tsUnit.ts" />
// <reference path="./util/languageTest.ts" />
var profilePage;
(function (profilePage) {
    var profilePageClass = (function () {
        function profilePageClass() {
            var _this = this;
            var $ = jQuery;
            var sel;

            $('select').on('change', function () {
                sel = $('#lang_sel').val();
                _this.changeLanguage(sel);
            });
        }
        profilePageClass.prototype.changeLanguage = function (sel) {
            var $ = jQuery;
            var sel;
            var mode_string;

            switch (sel) {
                case 'english':
                    this.showEnglish();
                    mode_string = 'english';
                    break;
                case 'japanese':
                    mode_string = 'japanese';
                    this.showJapanese();
                    break;
                case 'chinese':
                    mode_string = 'chinese';
                    this.showChinese();
                    break;
                case 'indonesian':
                    mode_string = 'indonesian';
                    this.showIndonesian();
                    break;
                default:
                    this.showEnglish();
                    break;
            }
            return mode_string;
        };

        profilePageClass.prototype.showJapanese = function () {
            $('#english_wrapper').hide();
            $('#japanese_wrapper').show();
            $('#indonesian_wrapper').hide();
            $('#mandarin_wrapper').hide();
        };

        profilePageClass.prototype.showEnglish = function () {
            $('#english_wrapper').show();
            $('#japanese_wrapper').hide();
            $('#indonesian_wrapper').hide();
            $('#mandarin_wrapper').hide();
        };

        profilePageClass.prototype.showChinese = function () {
            $('#indonesian_wrapper').hide();
            $('#japanese_wrapper').hide();
            $('#english_wrapper').hide();
            $('#mandarin_wrapper').show();
        };

        profilePageClass.prototype.showIndonesian = function () {
            $('#indonesian_wrapper').show();
            $('#japanese_wrapper').hide();
            $('#english_wrapper').hide();
            $('#mandarin_wrapper').hide();
        };
        return profilePageClass;
    })();
    profilePage.profilePageClass = profilePageClass;
})(profilePage || (profilePage = {}));
//# sourceMappingURL=profilePage.js.map
