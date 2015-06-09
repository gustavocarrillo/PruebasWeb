var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar_form"),
	$list = $("#contenido"),
	$post = $(".item").first();

//funciones
function mostrarFormulario(event){
	event.preventDefault();
	$form.slideToggle();
	event.stopPropagation();
}

//eventos
$button.click( mostrarFormulario )




