'use strict';
define(['star', 'htmltmpl', 'rootScope', 'typeit'], function ( star, htmltmpl, rootScope ){
	return function (){

		function HomeMod (){
			this.star = star;
			this.init();
		}

		HomeMod.prototype = {
			constructor : HomeMod,

			init : function (){
				$('body').css('background', '#0B1628');
				this.star.init(10);
				// this.showWords();

				//	test
				$('#cameo').addClass('cameoActive');

				//	enter home
				$('#cameo').on('click', function (){
					//	remove start animate
					$(this).remove();
					$('#home_text').remove();
					$('#canvaszz').remove();
					$('#canvas').remove();

					//	change background image
					rootScope.changeBg('images/bg-02.jpg');

					//	append and show home
					$('body').append(htmltmpl.header);
					rootScope.changeNav();
				});
			},

			showWords : function (){
				$('#home_text p').eq(0).typeIt({
					whatToType: ['徘徊过多少橱窗，'],
     				typeSpeed: 150
				}, function (){
					$('#home_text p').eq(1).typeIt({
						whatToType: ['住过多少旅馆，'],
	     				typeSpeed: 150
					}, function (){
						$('#home_text p').eq(2).typeIt({
							whatToType: ['才会知道分离也并不冤枉'],
		     				typeSpeed: 150
						}, function (){
							$('#cameo').addClass('cameoActive');
						});
					});
				});
			}


		}

		/* start */
		new HomeMod();

	}
});