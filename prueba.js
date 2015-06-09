var $todo = $('*');

var buscar = function(){

	var cont = 0;

	for (var i = 0; i < $todo.length; i++) {
		
		if($todo.eq(i).css('display') == 'none'){
			cont++;
		}
	};

	console.log(cont);
}; 

buscar();