/* create by garfield on 2017-2-16 */
'use strict';
;
requirejs.config({
	baseUrl : './',
	paths : {
		jquery : 'lib/jquery.min',
		star : 'js/star',
		works : 'js/works',
		home : 'js/home',
		typeit : 'js/typeit.min',
		rootScope : 'js/public',
		show : 'js/test'
	}
});
require(['jquery', 'rootScope'],
		
function ( $, rootScope){
	console.log( rootScope );

	//	init

	$('#home').on('click', function (){

		require(['show'], function ( show ){
			show.show1();
		});

	});
	

});