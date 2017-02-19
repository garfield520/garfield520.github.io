define(['rootScope'], function ( rootScope ){
	return {
		show1 : show1
	}

	function show1 (){
		console.log('show1');

		$('#works').on('click', function (){
			console.log(2);
			console.log(rootScope);
		});
	}
});