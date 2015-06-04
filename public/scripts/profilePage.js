/// <reference path="./thirdparty/jquery.d.ts" />
/// <reference path="./util/touchClass.ts" />
var page;
(function (page) {
    var profilePage = (function () {
        function profilePage() {
            var _this = this;
            var $ = jQuery;
            $('select').on('change', function () {
                _this.changeLanguage();
            });
        }
        profilePage.prototype.changeLanguage = function () {
            var $ = jQuery;
            var sel;
            sel = $('#lang_sel').val();
            switch (sel) {
                case 'english':
                    this.showEnglish();
                    break;
                case 'japanese':
                    this.showJapanese();
                    break;
                case 'chinese':
                    this.showChinese();
                    break;
                case 'indonesian':
                    this.showIndonesian();
                    break;
                default:
                    this.showEnglish();
                    break;
            }
        };
        profilePage.prototype.showJapanese = function () {
            $('#english_wrapper').hide();
            $('#japanese_wrapper').show();
            $('#indonesian_wrapper').hide();
            $('#mandarin_wrapper').hide();
        };
        profilePage.prototype.showEnglish = function () {
            $('#english_wrapper').show();
            $('#japanese_wrapper').hide();
            $('#indonesian_wrapper').hide();
            $('#mandarin_wrapper').hide();
        };
        profilePage.prototype.showChinese = function () {
            $('#indonesian_wrapper').hide();
            $('#japanese_wrapper').hide();
            $('#english_wrapper').hide();
            $('#mandarin_wrapper').show();
        };
        profilePage.prototype.showIndonesian = function () {
            $('#indonesian_wrapper').show();
            $('#japanese_wrapper').hide();
            $('#english_wrapper').hide();
            $('#mandarin_wrapper').hide();
        };
        return profilePage;
    })();
    page.profilePage = profilePage;
})(page || (page = {}));
//# sourceMappingURL=profilePage.js.map