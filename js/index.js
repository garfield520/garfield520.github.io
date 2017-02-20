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
		main : 'js/main',
		life : 'js/life'
	}
});
require(['jquery', 'main'],
		
function ( $, main){

	//	init
	main();
	

});