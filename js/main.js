'use strict';

define(['jquery', 'rootScope', 'star', 'typeit', 'home', 'works', 'life'],
function ( $, rootScope, star, typeit, home, works, life ){
	return function (){

		//	main start
		showStar(800);
		showWords();
		

		$('#cameo').on('click', function (){
			//	remove start animate
			$(this).remove();
			$('#home_text').remove();
			$('#canvaszz').remove();
			$('#canvas').remove();

			//	change background image
			rootScope.changeBg('images/bg-02.jpg');

			//	show header
			$('#header').show();

			rootScope.changeNav();
			rootScope.showCurrent($('#home_content'));

		});

		//	home
		$('#home').on('click', function (){
			rootScope.changeBg('images/bg-02.jpg');
			rootScope.showCurrent($('#home_content'));
		});

		//	works
		$('#works').on('click', function (){
			rootScope.changeBg('images/bg-01.jpg');
			rootScope.showCurrent($('#works_content'));
		});

		//	life
		$('#life').on('click', function (){
			rootScope.changeBg('images/bg-03.jpg');
			rootScope.showCurrent($('#life_content'));
		});

		function showStar ( starNums ){
			star.init(starNums);
			$('body').css('background', '#0B1628');
		}

		function showWords (){
			$('#home_text').show();
			$('#home_text p').eq(0).typeIt({
				whatToType: ['总会有一种生活，'],
 				typeSpeed: 150
			}, function (){
				$('#home_text p').eq(1).typeIt({
					whatToType: ['应付得了眼前的苟且，'],
     				typeSpeed: 150
				}, function (){
					$('#home_text p').eq(2).typeIt({
						whatToType: ['也承载得了诗和远方。'],
	     				typeSpeed: 150
					}, function (){
						$('#cameo').show();
						$('#cameo').addClass('cameoActive');
					});
				});
			});
		}




	}
});
