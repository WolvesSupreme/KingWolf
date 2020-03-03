//guardar el slider en una variable
var slider = $('#slider');
//buscar cantidad de secciones
var seccion = slider.find('.slider__section');
//contar el numero de secciones
var n = seccion.length;
//ancho del slider
var ws = 100 * n;
//definir el ancho de slider
slider.css('width', ws+'%');
//almacenar botones
var prev = $('#btn-prev');
var next = $('#btn-next');
//Movemos el ultimo seccion al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//le damos un margen negativo para ver el segundo elemento, que vendría a ser la primera imagen
slider.css('margin-left', '-'+100+'%');


//mover boton derecho
function moverD() {
	$(slider).animate({
		marginLeft: '-'+200+'%'
	}, 700, function() {
		$('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
		slider.css('margin-left', '-'+100+'%');
  });
}
//mover boton derecho
function moverI() {
	$(slider).animate({
		marginLeft: 0
	}, 700, function() {
		$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
		slider.css('margin-left', '-'+100+'%');
  });
}

function autoplay() {
	interval = setInterval(function(){
		moverD();
	}, 5000);
}
next.on('click',function() {
	moverD();
	clearInterval(interval);
	autoplay();
});

prev.on('click',function() {
	moverI();
	clearInterval(interval);
	autoplay();
});


autoplay();