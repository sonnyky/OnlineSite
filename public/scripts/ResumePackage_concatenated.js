/// <reference path="./ThirdParty/jquery.d.ts" />
/// <reference path="./Util/touchClass.ts" />
var page;
(function (page) {
    var profilePage = (function () {
        function profilePage() {
            var $ = jQuery;
            var param = {
                target: '#flag_japan',
                callback_end: function () {
                    $('#english_wrapper').hide();
                    $('#japanese_wrapper').show();
                    $('#indonesian_wrapper').hide();
                    $('#mandarin_wrapper').hide();
                }
            };
            new util.touchClass(param);
            param = {
                target: '#flag_american',
                callback_end: function () {
                    $('#english_wrapper').show();
                    $('#japanese_wrapper').hide();
                    $('#indonesian_wrapper').hide();
                    $('#mandarin_wrapper').hide();
                }
            };
            new util.touchClass(param);
            param = {
                target: '#flag_indonesian',
                callback_end: function () {
                    $('#indonesian_wrapper').show();
                    $('#japanese_wrapper').hide();
                    $('#english_wrapper').hide();
                    $('#mandarin_wrapper').hide();
                }
            };
            new util.touchClass(param);
            param = {
                target: '#flag_taiwan',
                callback_end: function () {
                    $('#indonesian_wrapper').hide();
                    $('#japanese_wrapper').hide();
                    $('#english_wrapper').hide();
                    $('#mandarin_wrapper').show();
                }
            };
            new util.touchClass(param);
        }
        return profilePage;
    })();
    page.profilePage = profilePage;
})(page || (page = {}));
//# sourceMappingURL=profilePage.js.map
;/// <reference path="./ThirdParty/jquery.d.ts" />
/// <reference path="./Util/touchClass.ts" />
/**
@module page
*/
var page;
(function (page) {
    var pageControl = (function () {
        function pageControl(param) {
            var i;
            console.log("Running pageControl");

            for (i = 0; i < param.length; i++) {
                new util.touchClass(param[i]);
            }
        }
        return pageControl;
    })();
    page.pageControl = pageControl;
})(page || (page = {}));
//# sourceMappingURL=topPage.js.map
