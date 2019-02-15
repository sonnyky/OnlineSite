"use strict";
/// <reference path="./thirdparty/jquery.d.ts" />
/// <reference path="./util/touchClass.ts" />
/**
@module page
*/
var page;
(function (page) {
    var pageControl = /** @class */ (function () {
        function pageControl() {
            var i;
            var $ = jQuery;
            var topPageParam = [
                {
                    target: '#profile-button',
                    callback_end: function () {
                        location.href = "/profile";
                    }
                },
                {
                    target: '#others-button',
                    callback_end: function () {
                        location.href = "https://rawgit.com/sonnyky/WebTrials/master/HTML/index.html";
                    }
                },
            ];
            console.log("Running pageControl");
            for (i = 0; i < topPageParam.length; i++) {
                new util.touchClass(topPageParam[i]);
            }
        }
        return pageControl;
    }());
    page.pageControl = pageControl;
})(page || (page = {}));
