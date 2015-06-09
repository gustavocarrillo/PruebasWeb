var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar_form"),
	$list = $("#contenido"),
	$post = $(".item").first();

if(localStorage.getItem('autosave')){ //getItem recupera el item especificado 
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

//setIntevarl es una funcion que ejecuta otra funcion en un tiempo determinado en mseg
//en este caso la funcion se ejecutar cada 1seg (1000mseg)
var id = setInterval(function(){
	sessionStorage.setItem('titulo', $titulo.val());//setItem crea el item y le asigna un valor
	sessionStorage.setItem('url', $url.val());
}, 1000);

//funciones
function mostrarFormulario(e){
	e.preventDefault();

	$list.slideToggle(); //slideToggle() cambia el atributo display de un elemento de acuerdo a su estado						 //de acuerdo a su estado
	$form.slideToggle();
	
	e.stopPropagation(); //impide que los padres del elemento escuchen el evento
}

function agregarPost(e){
	e.preventDefault();

	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone(); //$clone es un objeto JQuery al que se puede acceder a sus propiedades

	$clone.find('.titulo_item a') //find permite buscar
		  .text(titulo)			 //accede a la propiedad text del elemento input
		  .attr('href', url);   //accede a los atributos de un elemento html 

	$clone.hide(); //hace display none en css

	$list.prepend($clone);	//prepend adiciona el clone en el principio de listado	

	$clone.fadeIn(); //cambia a display block de forma animada
	mostrarFormulario();
	$url.val('');
	$titulo.val('');
	return false;	
}
//eventos
$button.click( mostrarFormulario )
$form.on('submit', agregarPost)



var fn = function(i){
	return function(){
		alert(i);
	}
}

for (var i = 0; i < 5; i++) {
		$('#mostrar_form').click(fn(i));
	};

var $obj = $('#formulario');

(function(){
	$obj.css('display','block');

	if($obj.css('display') == 'none'){
		return console.log(true);
	}
	else{
		return console.log(false);
	}
})();