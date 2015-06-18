/// <reference path="./thirdparty/jquery.d.ts" />
/// <reference path="./util/touchClass.ts" />

/**
@module page
*/

module file{
	export class fileUtil{
		constructor(){
			this.listenToButton();
		}
		listenToButton(){
			var $ = jQuery;
			$('.btn-file').on('change', (e)=> {
				var file1:any = document.getElementById("fileBtn");
				console.log(file1.value);
			});
		}
		uploadFile(){
			//TODO
		}
		uploadPhoto(path_to_file:string, storage_db:string){
			console.log("File Uploaded!");
		}
	}
}
