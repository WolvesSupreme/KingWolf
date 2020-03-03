function validar() {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var motivo  = document.getElementById("motivo").value;
    var mensaje = document.getElementById("mensaje").value;  
    var expresion = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    function vacio(q) {
      for ( i = 0; i < q.length; i++ ) {
        if ( q.charAt(i) != " " ) {
          return true
        }
      }
      return false;
    }
    if(nombre == "" || correo == "" || telefono == "" || motivo == "" || mensaje == ""){
      alert("Todos los campos son obligatorios");
      return false;
    }
    else if (vacio(nombre) == false || vacio(telefono) == false || vacio(motivo) == false || vacio(mensaje) == false){
      alert("No inserte espacios en blanco");
      return false;
    }
    else if (!expresion.test(correo)){
      alert("El correo no es válido. Ejm: usario@hotmail.com");
      return false;
    }
    else if (isNaN(telefono)){
      alert("El teléfono debe ser un número");
      return false;
    }
}