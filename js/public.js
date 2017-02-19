/*
 *	public.js
 *	some public functions
 */
'use strict';
define(['jquery'], function ( $ ){
	return {
		changeBg : changeBg,
		changeNav : changeNav
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

	
});