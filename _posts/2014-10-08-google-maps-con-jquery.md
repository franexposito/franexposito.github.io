---
layout: post
title: "Google Maps con jQuery"
description: "Introducir un mapa de Google Maps en una web con plugin para jQuery."
category: Web
comments: true
tags: [web, jquery, google map, html5]
---
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script src="http://cdn.jquerytools.org/1.2.7/full/jquery.tools.min.js"></script>
<script src="/recursos/js/jquery.gmap.min.js"></script>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.3/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.3/highlight.min.js"></script>
{% include JB/setup %}

Introducir un mapa de Google Maps en nuestra página web puede resultar una tarea sencilla si conocemos previamente la dirección pero puede resultar complejo si queremos que los usuarios introduzca su dirección o si queremos detectar automaticamente la dirección. Para ello tenemos un plugin que facilita estas funciones en jQuery: [gMap for V3 Google Maps API](https://github.com/fridek/gmap). Este plugin te permite:

* Centrar el mapa, niveles de zoom y seleccionar entre los distintos tipos de mapas.
* Añadir marcadores con iconos personalizados, popups y títulos.
* Posicionar marcadores por latitud/longitud o por la dirección.
* Utilizar los controles personalizados.

La utilización del plugin es sencillo. Solo necesitamos añadir el siguiente código:
<pre><code class="html">
&lt;script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"&gt;&lt;/script&gt;
&lt;script src="RUTA/jquery.gmap.min.js"&gt;&lt;/script&gt;
</code></pre>

Ahora solo necesitas indicarle al plugin como quieres mostrar el mapa y las diferentes opciones. Por ejemplo:
<pre><code class="javascript">
$('#map').gMap({
        latitude: 43.653561,
        longitude: -0.567296,
        zoom: 18,
        markers: [{latitude: 43.653561, longitude: -0.567296}]
});
</code></pre>

En este caso *#map* es el id del contenedor donde queremos introducir el mapa, *latitude* y *longitude* indican la latitud y longitud donde se centrará el mapa y *zoom* es evidente. A través de *markers* indicamos donde queremos que estén situados los marcadores.
El plugin permite numerosas opciones. Algunas muy interesantes son:

* **minZoom** y **maxZoom** que permiten limitar el zoom que puede aplicar el usuario.
* **maxType** que permite seleccionar el tipo de mapa entre ROADMAP, SATELLITE, HYBRID y TERRAIN.
* **mapTypeControl** que permite activar o desactivar los controles.
* **controlsPositions** que permite situar los controles en la zona del mapa que quieras.
* **routeFinder** que permite establecer el camino entre dos puntos.

Puedes encontrarlas todas en la [documentación oficial](http://www.smashinglabs.pl/gmap/documentation).

**Aviso:** hay un error muy común a la hora de no visualizar bien el mapa y es que debemos de asignarle un tamaño al contenedor donde está situado el mapa, puesto que si no tiene un tamañao antes de poner el mapa este no aparecerá correctamente.

###Ejemplos
<pre><code>
$('#map').gMap({
        latitude: 37.196937,
        longitude: -3.624265,
        zoom: 18,
        markers: [{latitude: 37.196937, longitude: -3.624265}]
});
</code></pre>

<div class="map" id="map1"></div>
<br />
<pre><code>
$('#map').gMap({});
</code></pre>

<div class="map" id="map2"></div>



<!-- script mapas -->
<script type="application/javascript">
$('#map1').gMap({
        latitude: 37.196937,
        longitude: -3.624265,
        zoom: 18,
        markers: [{latitude: 37.196937, longitude: -3.624265}]
});

$('#map2').gMap({});
</script>
