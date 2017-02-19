'use strict';
define(['rootScope'], function ( rootScope ){
	return function (){
		function Works (){
			this.init();
		}

		Works.prototype = {
			constructor : Works,

			init : function (){
				
			}
		}

		new Works();
	}
});