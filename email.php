<?php

if (isset($_POST["submit"])){

    $secretkey = "6LemFNEgAAAAANGghMMazdW00rcvrVQ0S1TwOp86";
    $ip = $_SERVER['REMOTE_ADDR'];
    $captcha = $_POST['g-recaptcha-response'];

    $respuesta = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretkey&response=$captcha&remoteip=$ip");

    $atributos = json_decode($respuesta, TRUE);


    if($atributos['success']){
        $header  = "Content-Type: text/plain";
        $mensaje = "Servicio: " . $_POST['service'] . "\n\n";
        $mensaje .= "Este mensaje fue enviado por " . $_POST['email'] . "\n\n";
        $mensaje .= "Nombre: " . $_POST['name'] . "\n\n";
        $mensaje .= "Teléfono: " . $_POST['phone'] . "\n\n";
        $mensaje .= "Empresa: " . $_POST['enterprice'] . "\n\n";
        $mensaje .= "Mensaje: " . $_POST['textarea'] . "\n\n";
        $mensaje .= "Enviado el " . date("d/m/Y", time());
    
        $para = "info@instrumentaldufour.net";
        $asunto = "Mail de Instrumental Dufour";
        mail($para, $asunto, utf8_decode($mensaje),$header);
        header("Location:https://www.instrumentaldufour.net/");
    }
    else{
        header("Location:https://www.instrumentaldufour.net/#contact");
    }
}





?>