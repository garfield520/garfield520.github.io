'use strict';

define(['jquery', 'rootScope', 'star', 'typeit', 'home', 'works', 'life'],
function ( $, rootScope, star, typeit, home, works, life ){
	return function (){

		//	main start
		showStar(20);
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
						$('#cameo').show();
						$('#cameo').addClass('cameoActive');
					});
				});
			});
		}




	}
});