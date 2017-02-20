'use strict';
define(['rootScope'], function ( rootScope ){
	return (function (){

		console.log( 'this is works js' );

		// $('.duc-img-box')
		console.log($('.duc-img-box').length);

		$('.duc-img-box li').each(function (){

			$(this).on('mouseover', function (){
				$(this).find('.imgShadow').fadeIn();
			});

			$(this).on('mouseleave', function (){
				$(this).find('.imgShadow').fadeOut();
			});
		});

	})();
});