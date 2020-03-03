<?php
    $destino= "braymstuwar@hotmail.com";
    $nombre = $_POST("nombre");
    $correo = $_POST("correo");
    $telefono = $_POST("telefono");
    $motivo = $_POST("motivo");
    $mensaje = $_POST("mensaje");
    $contenido = "nombre: " . $nombre . "\nCorreo: " . $correo . "\nTeléfono: " . $telefono . "\motivo: " . $motivo . "\mensaje: " . $mensaje;
    mail($destino,$motivo, $contenido);
    alert("Gracias por contactarnos");
?>