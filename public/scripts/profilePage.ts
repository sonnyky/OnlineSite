/// <reference path="./thirdparty/jquery.d.ts" />
/// <reference path="./util/touchClass.ts" />

module page{

	export class profilePage{
		constructor(){
			var $=jQuery;
			$('select').on('change', ()=>{
				this.changeLanguage();
			});
		}
		
		changeLanguage(){
			var $ = jQuery;
			var sel:string;
			sel = $('#lang_sel').val();
			switch(sel){
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