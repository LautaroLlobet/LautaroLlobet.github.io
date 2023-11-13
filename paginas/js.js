$('.imggaleria').click(function(e) {
    var img = e.target.src;
    var caption = e.target.alt;

    // Obtén el texto personalizado del atributo data-caption
    var customText = $(e.target).data('caption');

    // Construye el contenido del contenedor con el texto personalizado
    var seleccionada = '<div id="contenedor"> <img src="' + img + '" alt="' + caption + '" id="principal"> <div id="caption">' + customText + '</div> <div id="botonsalida">X</div> </div>';

    // Verifica si ya existe un contenedor antes de agregar uno nuevo
    if ($('#contenedor').length === 0) {
        $('body').append(seleccionada);

        // Agrega el manejador de clic para el botón de salida dentro del contenedor
        $('#botonsalida').click(function() {
            $('#contenedor').remove();
        });
        
        // También puedes agregar un manejador de clic al contenedor para cerrarlo al hacer clic en cualquier parte de la imagen
        $('#contenedor').click(function() {
            $(this).remove();
        });
        
        // Evita que el clic en la imagen cierre el contenedor
        $('#principal').click(function(e) {
            e.stopPropagation();
        });
    }
});

function cambiarfondo() {
    var button = document.getElementById("toggleButton");
    var body = document.body;

    button.addEventListener("click", function () {
      //chequea si contiene la class black
      if (body.classList.contains("black")) {
        // si la contiene la remueve y cambia el color a azul
        body.classList.remove("black");
        body.style.backgroundColor = "#0d6efd";
        button.innerText = "Cambiar Fondo";
      } else {
        // si no la contiene remueve la clase del color primario y agrega la clase black y el cambio de color
        body.classList.remove("bg-primary");
        body.classList.add("black");
        body.style.backgroundColor = "black";
        button.innerText = "Resetear Fondo";
      }
    });
  }