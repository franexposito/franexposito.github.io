<?php
    require_once 'config.php';

    if($_POST) {
        $nombre = $_POST[''];
        $pass = $_POST[''];
        $email = $_POST[''];
        $diasTotales = $_POST[''];
        $altura = $_POST[''];
        $edad = $_POST[''];
        $peso = $_POST[''];
        $envergadura = $_POST[''];
        $posicion = $_POST[''];
        $estFisico = $_POST[''];
        $estAtaque = $_POST[''];
        $estDefensa = $_POST[''];
        
            
        
        try{
            $conexion = new PDO(DB_DSN, DB_USUARIO, DB_CONTRASENIA);
            $conexion->setAttribute( PDO::ATTR_PERSISTENT, true);
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conexion->exec("set names utf8");

        } catch ( PDOException $e ) {
            $resp = array("respuesta": 'false');
            echo json_encode($resp);
        }

    }

?>