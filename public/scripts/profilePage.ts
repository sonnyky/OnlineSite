/// <reference path="./thirdparty/jquery.d.ts" />
/// <reference path="./util/touchClass.ts" />
// <reference path="./util/tsUnit.ts" />
// <reference path="./util/languageTest.ts" />

module profilePage{

	export class profilePageClass{
		constructor(){
			var $=jQuery;
			var sel:string;

			$('select').on('change', ()=>{
				sel = $('#lang_sel').val();
				this.changeLanguage(sel);
			});
		}
		
		changeLanguage(sel:string):string{
			var $ = jQuery;
			var sel:string;
			var mode_string:string;

			switch(sel){
				case 'english':
				this.showEnglish();
				mode_string = 'english';
				break;
				case 'japanese':
				mode_string = 'japanese'
				this.showJapanese();
				break;
				case 'chinese':
				mode_string = 'chinese'
				this.showChinese();
				break;
				case 'indonesian':
				mode_string = 'indonesian'
				this.showIndonesian();
				break;
				default:
				this.showEnglish();
				break;
			}
			return mode_string;
		}
		
		showJapanese(){
				$('#english_wrapper').hide();
				$('#japanese_wrapper').show();
				$('#indonesian_wrapper').hide();
				$('#mandarin_wrapper').hide();
		}
		
		showEnglish(){
				$('#english_wrapper').show();
				$('#japanese_wrapper').hide();
				$('#indonesian_wrapper').hide();
				$('#mandarin_wrapper').hide();
		}
		
		showChinese(){
				$('#indonesian_wrapper').hide();
				$('#japanese_wrapper').hide();
				$('#english_wrapper').hide();
				$('#mandarin_wrapper').show();
		}
		
		showIndonesian(){
				$('#indonesian_wrapper').show();
				$('#japanese_wrapper').hide();
				$('#english_wrapper').hide();
				$('#mandarin_wrapper').hide();
		
		}
		
	}
}