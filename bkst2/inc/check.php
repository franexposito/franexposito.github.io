<?php
    require_once 'config.php';
    
    if($_POST) {
        $pass = md5('fr' . $_POST['pass'] . 'rf');
        try{
		  $conexion = new PDO(DB_DSN, DB_USUARIO, DB_CONTRASENIA);
		  $conexion->setAttribute( PDO::ATTR_PERSISTENT, true);
		  $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		  $conexion->exec("set names utf8");

        } catch ( PDOException $e ) {
            $resp = array("respuesta": "false");
            echo json_encode($resp);
	   }    
    }

?>