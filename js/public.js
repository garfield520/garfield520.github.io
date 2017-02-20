/*
 *	public.js
 *	some public functions
 */
'use strict';
define(['jquery'], function ( $ ){
	return {
		changeBg : changeBg,
		changeNav : changeNav,
		showCurrent : showCurrent
	}

	/*
	 *	change background
	 */
	function changeBg ( url ){
		$('body').css('background', 'url('+ url +') no-repeat');
		$('body').css('backgroundAttachment', 'fixed');
	}

	/*
	 *	nav tab changed
	 */
	function changeNav (){
		$('#navBox ul li').each(function (){
			$(this).on('click', function(){
				$('#navBox ul li').removeClass('active');
				$(this).addClass('active');
			});
		});
	}

	/*
	 *	show current content
	 */
	function showCurrent ( cur, fn ){
		var arr = [$('#cameo'), $('#home_text'), $('#home_content'), $('#works_content'), $('#life_content')];
		for( var i = 0; i < arr.length; i++ ){
			arr[i].hide();
		}
		cur.show();
		if( fn )fn();
	}

	
});