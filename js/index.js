/* create by garfield on 2017-2-16 */
'use strict';
;
requirejs.config({
	baseUrl : './',
	paths : {
		jquery : 'lib/jquery.min',
		star : 'js/star',
		home : 'js/home',
		htmltmpl : 'js/htmltmpl',
		typeit : 'js/typeit.min',
		rootScope : 'js/public'
	}
});
require([
			'jquery',
			'rootScope',
			'home', 
			'htmltmpl',
		],
		
function ( $, rootScope, home, htmltmpl ){
	home();
});