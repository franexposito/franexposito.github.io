---
layout: post
title: "Creación de blog con Jekyll y Github"
description: "Como crear un sencillo blog estático con Jekyll y alojarlo en Github"
category: Web 
tags: [jekyll, github, blog, page]
---
{% include JB/setup %}

Una de las formas más sencillas que he probado a la hora de publicar un blog es la utilización de [Jekyll](http://jekyllrb.com/). Este sistema es utilizado en [Github](http://github.com). Fue desarrollado por Tom Preston-Werner, fundador de GitHub, y está desarrollado en Ruby. Como indica en su propia pagina web oficial, *hace lo que tu le dices que haga, ni más ni menos*. 

###¿Por qué elegir este sistema?
Esta pregunta tiene muchas respuestas, en mi caso lo escogí por diversos motivos:

* Permite crear entradas con un sencillo bloc de notas y la utilización de [Markdown](http://daringfireball.net/projects/markdown/) que para quién no lo conozca es un lenguaje de marcado bastante ligero y sencillo que se convierte a XHTML. Ya hablaré más adelante en una entrada propia. También permite utilizar Textile o Liquid.
* Permite olvidarte de buscar un hosting adecuado y que cumpla con tus necesidades ya que puedes alojarlo en Github de manera totalmente gratuita.
* Es altamente personalizable, de manera mucho mas intuitiva que blogs creadas con otros sistemas como WordPress, Joomla, etc.
* **Es simple y funciona.**
* **Puedes utilizar tu propio dominio.** Esto es especialmente importante ya que si tienes un blog en wordpress puedes migrarlo y mantener tu dominio.

###Inconvenientes
Pero no todo es tan bonito ya que como todo sistema tiene sus inconvenientes y es que Jekyll no está pensando para usar una base de datos para almacenar las entradas, páginas, etc. Cada entrada y página es un archivo de texto en cuya cabecera se encuentra información en formato YAML indicando el título, categorias, descripción etc que es interpretado por Jekyll. 

###Instalación
Dejémnos de tanta charla y vayamos a lo que verdaderamente importa, ¿esto como se instala?. Esta pregunta tiene una respuesta muy sencilla.

#####1. Instalación de Ruby
En primer lugar necesitamos instalar Ruby (si ya lo tienes disponible continua con el paso 2). Primero comprobaremos que no disponemos ya de una versión:
<pre><code>
$ apt-get install ruby-dev
</code></pre>

#####2. Intalación de Jekyll
Ahora necesitamos instalar Jekyll en nuestro ordenador. Esto nos servirá para poder ver y modificar nuestra web de manera local.
<pre><code>
$ gem install jekyll
</code></pre>
Ya tenemos nuestra máquina preparada. 

#####3. Jekyll Bootstrap
Personalmente yo he preferido utilizar [Jekyll Bootstrap](http://jekyllbootstrap.com/) para este tutorial puesto que permite instalar temas, crear páginas y post desde linea de comandos.
En primer lugar crearemos un nuevo repositorio con la siguiente estructura:
<pre>USUARIO.github.io</pre>
Una vez hemos creado el proyecto lo clonaremos en nuestro ordenador y lo subiremos:
<pre>
$ git clone https://github.com/plusjade/jekyll-bootstrap.git USUARIO.github.com
$ cd USERNAME.github.com
$ git remote set-url origin git@github.com:USUARIO/USUARIO.github.com.git
$ git push origin master
</pre>
Ya está. Ya tenemos nuestro blog en Jekyll creado. Puedes comprobarlo tu mismo introduciendo en tu navegador la dirección que has utilizado para tu proyecto: *http://USUARIO.github.io/*

#####4. Archivo de configuración
Jekyll dispone de un archivo de configuración llamado *_config.yml*. En el puedes encontrar las diferentes opciones de tu blog (titulo, descripción, autor, versión, tipos de enlaces, etc.). 

Como puedes ver Jekyll tiene también multitud de [temas](http://jekyllthemes.org/) creados por otros usuarios y que puedes utilizar de manera totalmente libre.

#####5. Modificarlo, creación de post y páginas
Ahora llega la parte bonita. Para modificar el blog solo necesitas escribir el siguiente comando en una terminal. Para ello nos situamos en la carpeta donde tengamos el proyecto y escribrimos:
<pre><code>
$ jekyll serve
</code></pre>
Ahora nos vamos al navegador y utilizaremos esta dirección para ver los cambios:
<pre><code>
http://localhost:4000
</code></pre>

Para crear un post solo tenemos que crear manualmente un archivo con la fecha y el nombre en la carpeta *_post* con la extensión md (en caso de utilizar Markdown). En este archivo solo tenemos la obligación de añadir una cabecera con el siguiente formato:
<pre>
&#45;&#45;&#45;
layout: post
title: Esta es una entrada de prueba
&#45;&#45;&#45;
</pre>

Pero como antes he comentado, hay una manera más sencilla aún de crear la entrada y es con el siguiente comando:
<pre><code>
$ rake post title="Esta es una entrada de prueba"
</code></pre>

De esta manera también podemos crear páginas:
<pre><code>
$ rake page name="pagina.md"
</code></pre>

Yo se que tu sabes mucho de github pero te voy a dejar aquí los comandos para subir el proyecto por si hoy tienes un mal día y no lo recuerdas:
<pre><code>
$ git add --all
$ git commit -m "Actualizando el blog"
$ git push
</code></pre>

#####6. Dominio propio
Como ya dije antes, podemos usar nuestro propio dominio. Para ello haremos uso de *ALIAS* y un archivo llamado *CNAME*. En primer lugar crearemos en el directorio raiz del blog un archivo llamado CNAME que contendrá el nombre del dominio. En mi caso es el siguiente:
<pre>
franexposito.es
</pre>

Después nos dirigiremos a nuestro proveedor y crearemos un ALIAS que apunte a la dirección IP de la página. Para obtener esta información basta con realizar un ping al dominio de nuestro proyecto:
<pre>
ping USUARIO.github.io
</pre>

Ahora solo queda esperar a que se expanda y lo tendremos listo en unas cuentas horas.

###Conclusión
Al final me he extendido más de lo que quisiera y aún asi apenas he podido abarcar una pequeña parte de Jekyll. Si tienes alguna duda no dudes en consultarmela a través de Twitter o a través de [Github](http://github.com/franexposito/franexposito.github.io). ¡Gracias por leerme!
<br />
<br />
<br />
Fuentes: [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-with-pages/), [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)