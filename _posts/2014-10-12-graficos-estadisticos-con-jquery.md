---
layout: post
title: "Gráficos con jQuery"
description: "Introducir gráficos en nuestra página web con un sencillo e intuitivo plugin"
category: Web
tags: [jquery, graficos, barras, donuts, html5]
---
<script src="http://cdn.jquerytools.org/1.2.7/full/jquery.tools.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
<script src="http://cdn.oesmith.co.uk/morris-0.5.1.min.js"></script>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.3/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.3/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
{% include JB/setup %}

Introducir gráficos en una página web se convierte en una tarea sencilla gracias a este plugin para jQuery llamada [Morris.js](http://morrisjs.github.io/morris.js/).  
Este plugin nos facilita mucho la tarea de realizar distintos tipos de gráficos:

* **Gráficos de barras**
* **Gráficos de lineas**
* **Gráficos de "donuts"**

Para utitilizar lo haremos a través de unas cuentas lineas de código.  
En primer lugar, como siempre, tenemos que añadir el plugin a nuestra web. Para ello tenemos dos opciones: [descargarlo]() o introducir directamente la siguiente línea de código:

<pre><code class="html">
&lt;script src="http://cdn.oesmith.co.uk/morris-0.5.1.min.js"&gt;&lt;/script&gt;
</code></pre>

También necesitaremos el plugin Raphael.js:
<pre><code class="html">
&lt;script src="//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"&gt;&lt;/script&gt;
</code></pre>

El siguiente paso es crear un contenedor donde introducir el gráfico. Es importante que el contenedor tenga una altura específica porque en caso contario puede que el gráfico no se vea correctamente.

<pre><code class="html">
&lt;div id="migrafico" syte="height: 350px;"&gt;&lt;/div&gt;
</code></pre>

Ahora solo nos queda inicializar el gráfico con los datos. Para ello utilizaremos el siguiente código (en este caso utilizamos un gráfico de barras):

<pre><code class="javascript">
new Morris.Bar({
      element: 'migrafico',
      data: [
        { month: 'Ene', value: 31 },
        { month: 'Feb', value: 28 },
        { month: 'Mar', value: 31 },
        { month: 'Abr', value: 30 },
        { month: 'May', value: 31 },
        { month: 'Jun', value: 30 },
        { month: 'Jul', value: 31 },
        { month: 'Ago', value: 31 },
        { month: 'Sep', value: 30 },
        { month: 'Oct', value: 31 },
        { month: 'Nov', value: 30 },
        { month: 'Dic', value: 31 }
      ],
      xkey: 'month',
      ykeys: ['value'],
      labels: ['Days'],
      resize: true
    });
</code></pre>

* A través de *element* indicamos el id del contenedor. 
* A través de *data*, indicamos en pares de datos, los valores del gráfico.
* A través de *xkey* indicamos el nombre de los atributos que se representan en la coordenada x.
* A través de ykey* indiciamos el nombre de los atributos que se representan en la coordenada y.
* A través de *labels* indicamos las etiquetas de cada barra.

El plugin trae infinidad de opciones para configurar y personalizar los gráficos. Entre otras trae:

* **lineColors** que se utiliza para personalizar los colores
* **lineWidth** para personalizar el ancho de la barra
* **hideHover** para activar o desactivar los mensajes que salen al pasar el ratón por encima de una barra

Puedes ver todas las opciones en la documentación oficial del plugin: [gráficos de barras](http://morrisjs.github.io/morris.js/lines.html), [gráficos de donuts](http://morrisjs.github.io/morris.js/donuts.html), [gráficos de líneas](http://morrisjs.github.io/morris.js/lines.html)

###Ejemplos
<pre><code class="javascript">
new Morris.Bar({
      element: 'migrafico1',
      data: [
        { month: 'Ene', value: 31 },
        { month: 'Feb', value: 28 },
        { month: 'Mar', value: 31 },
        { month: 'Abr', value: 30 },
        { month: 'May', value: 31 },
        { month: 'Jun', value: 30 },
        { month: 'Jul', value: 31 },
        { month: 'Ago', value: 31 },
        { month: 'Sep', value: 30 },
        { month: 'Oct', value: 31 },
        { month: 'Nov', value: 30 },
        { month: 'Dic', value: 31 }
      ],
      xkey: 'month',
      ykeys: ['value'],
      labels: ['Days'],
      resize: true
    });
</code></pre>  
<div id="migrafico1" style="height: 350px;"></div> 
<pre><code class="javascript">
new Morris.Line({
      element: 'migrafico2',
      data: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75,  b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75,  b: 65 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 100, b: 90 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['A', 'B'],
      resize: true
    });
</code></pre>
<div id="migrafico2" style="height: 350px;"></div>
<pre><code class="javascript">
new Morris.Donut({
      element: 'migrafico3',
      data: [
        { label: 'Ene', value: 31 },
        { label: 'Feb', value: 28 },
        { label: 'Mar', value: 31 },
        { label: 'Abr', value: 30 },
        { label: 'May', value: 31 },
        { label: 'Jun', value: 30 },
        { label: 'Jul', value: 31 },
        { label: 'Ago', value: 31 },
        { label: 'Sep', value: 30 },
        { label: 'Oct', value: 31 },
        { label: 'Nov', value: 30 },
        { label: 'Dic', value: 31 }
      ]
    });
</code></pre>
<div id="migrafico3" style="height: 350px;"></div>

<script type="application/javascript">
new Morris.Bar({
      element: 'migrafico1',
      data: [
        { month: 'Ene', value: 31 },
        { month: 'Feb', value: 28 },
        { month: 'Mar', value: 31 },
        { month: 'Abr', value: 30 },
        { month: 'May', value: 31 },
        { month: 'Jun', value: 30 },
        { month: 'Jul', value: 31 },
        { month: 'Ago', value: 31 },
        { month: 'Sep', value: 30 },
        { month: 'Oct', value: 31 },
        { month: 'Nov', value: 30 },
        { month: 'Dic', value: 31 }
      ],
      xkey: 'month',
      ykeys: ['value'],
      labels: ['Days'],
      resize: true
    });
    
new Morris.Line({
      element: 'migrafico2',
      data: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75,  b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75,  b: 65 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 100, b: 90 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['A', 'B'],
      resize: true
    });

new Morris.Donut({
      element: 'migrafico3',
      data: [
        { label: 'Ene', value: 31 },
        { label: 'Feb', value: 28 },
        { label: 'Mar', value: 31 },
        { label: 'Abr', value: 30 },
        { label: 'May', value: 31 },
        { label: 'Jun', value: 30 },
        { label: 'Jul', value: 31 },
        { label: 'Ago', value: 31 },
        { label: 'Sep', value: 30 },
        { label: 'Oct', value: 31 },
        { label: 'Nov', value: 30 },
        { label: 'Dic', value: 31 }
      ]
    });
</script>