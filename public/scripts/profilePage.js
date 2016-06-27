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
            $('#aboutMe').html($('#aboutMeJapanese').html());
            $('#summary').html($('#summaryJapanese').html());
            $('#education').html($('#educationJapanese').html());
            $('#eduSummary').html($('#eduSummaryJapanese').html());
            $('#workExperience').html($('#workExperienceJapanese').html());
            $('#expSummary').html($('#expSummaryJapanese').html());
            $('#language').html($('#languageJapanese').html());
            $('#langSummary').html($('#langSummaryJapanese').html());
            $('#skills').html($('#skillsJapanese').html());
            $('#skillsSummary').html($('#skillsSummaryJapanese').html());
        };
        profilePageClass.prototype.showEnglish = function () {
            $('#aboutMe').html($('#aboutMeEnglish').html());
            $('#summary').html($('#summaryEnglish').html());
            $('#education').html($('#educationEnglish').html());
            $('#eduSummary').html($('#eduSummaryEnglish').html());
            $('#workExperience').html($('#workExperienceEnglish').html());
            $('#expSummary').html($('#expSummaryEnglish').html());
            $('#language').html($('#languageEnglish').html());
            $('#langSummary').html($('#langSummaryEnglish').html());
            $('#skills').html($('#skillsEnglish').html());
            $('#skillsSummary').html($('#skillsSummaryEnglish').html());
        };
        profilePageClass.prototype.showChinese = function () {
            $('#aboutMe').html($('#aboutMeMandarin').html());
            $('#summary').html($('#summaryMandarin').html());
            $('#education').html($('#educationMandarin').html());
            $('#eduSummary').html($('#eduSummaryMandarin').html());
            $('#workExperience').html($('#workExperienceMandarin').html());
            $('#expSummary').html($('#expSummaryMandarin').html());
            $('#language').html($('#languageMandarin').html());
            $('#langSummary').html($('#langSummaryMandarin').html());
            $('#skills').html($('#skillsMandarin').html());
            $('#skillsSummary').html($('#skillsSummaryMandarin').html());
        };
        profilePageClass.prototype.showIndonesian = function () {
            $('#aboutMe').html($('#aboutMeIndonesian').html());
            $('#summary').html($('#summaryIndonesian').html());
            $('#education').html($('#educationIndonesian').html());
            $('#eduSummary').html($('#eduSummaryIndonesian').html());
            $('#workExperience').html($('#workExperienceIndonesian').html());
            $('#expSummary').html($('#expSummaryIndonesian').html());
            $('#language').html($('#languageIndonesian').html());
            $('#langSummary').html($('#langSummaryIndonesian').html());
            $('#skills').html($('#skillsIndonesian').html());
            $('#skillsSummary').html($('#skillsSummaryIndonesian').html());
        };
        return profilePageClass;
    }());
    profilePage.profilePageClass = profilePageClass;
})(profilePage || (profilePage = {}));
//# sourceMappingURL=profilePage.js.map