/// <reference path="./thirdparty/jquery.d.ts" />
/// <reference path="./util/touchClass.ts" />
/**
@module page
*/
var file;
(function (file) {
    var fileUtil = (function () {
        function fileUtil() {
            this.listenToButton();
        }
        fileUtil.prototype.listenToButton = function () {
            var $ = jQuery;
            $('.btn-file').on('change', function (e) {
                var file1 = document.getElementById("fileBtn");
                console.log(file1.value);
            });
        };
        fileUtil.prototype.uploadFile = function () {
            //TODO
        };
        fileUtil.prototype.uploadPhoto = function (path_to_file, storage_db) {
            console.log("File Uploaded!");
        };
        return fileUtil;
    })();
    file.fileUtil = fileUtil;
})(file || (file = {}));
//# sourceMappingURL=fileUtil.js.map