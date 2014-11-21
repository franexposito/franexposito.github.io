---
layout: post
title: "Guardar en el datastore y configuración del archivo app.yaml para GAE"
description: "Guardar entidades en el datastore de manera sencilla y configurar el archivo app.yaml para poer tener varios directorios."
category: GAE
tags: [webapp2, python, gae, datastore]
---
{% include JB/setup %}

###Configuración de archivos
En primer lugar crearemos el formulario de manera sencilla, este sería el archivo **index.py**:

```
import os
import urllib
from google.appengine.api import users
from google.appengine.ext import ndb
import webapp2

formulario = """\
<form action="/asistente" method="post">
<div><label for="evento">Id evento: </label><input type="text" id="evento" name="evento"/></div>
<div><label for="nombre">Nombre: </label><input type="text" id="nombre" name="nombre"/></div>
<div><input type="submit" value="Guardar"></div>
</form>
"""

class insertar_asistente(webapp2.RequestHandler):
  def get(self):
  self.response.write(formulario)


  application = webapp2.WSGIApplication([
    ('/iAsistente', insertar_asistente)
    ], debug=True)

```

Cuando introducimos la url http://aplicacion.appspot.com/iAsistente muestra el formulario. Para esto nuestro app.yaml debe contener los siguientes Handlers:

```
- url: /.*
script: index.application
```
Esto indica que cuando alguien introduce cualquier url, se enlazará al archivo **index.py**.  
Cuando enviamos el formulario este nos llevara a la url http://aplicacion.appspot.com/asistente. En mi caso el archivo **asistente.py** se encuentra en la siguiente ruta:

```
\_oo
  \class
    asistente.py
index.py
app.yaml
```

Para que GAE reconozca la ruta, tendremos que ponerla de la siguiente manera:

```
- url: /asistente
script: _oo.class.asistente.application

- url: /.*
script: index.application
```

Ahora cuando se introduzca *http://aplicacion.appspot.com/asistente* nos dirigirá al archivo /_oo/class/asistente.py. Para que esto funcione corretamente debemos usar **WSGIApplication**. Así nuestro archivo **asistente.py** quedaría de la siguiente manera:

```
import os
import urllib
from google.appengine.api import users
from google.appengine.ext import ndb
import jinja2
import webapp2
from google.appengine.ext import ndb

class Asistente(ndb.Model):
  idEvento = ndb.StringProperty()
  nombre = ndb.StringProperty()


class index(webapp2.RequestHandler):
  def post(self):
    asistente = Asistente()
    asistente.idEvento = self.request.get('evento')
    asistente.nombre = self.request.get('nombre')

    asistente.put()

    self.response.write('Guardado correctamente :)')

application = webapp2.WSGIApplication([
  ('/asistente', index)
  ], debug=True)

```

Como vemos en la parte inferior, cuando alguien introduce la dirección http://aplicacion.appspot.com/asistente esta se atiende desde la clase index.  
Un dato importante es que, en mi caso, al utilizar solo esta clase desde un formulario no es necesario definir un metodo get. Aunque sería interesante crear un metodo get que reedireccione a otra página en caso de introducirse de manera manual la url.

###Guardar en el datastore  
En este caso solo nos queda recoger los datos enviados desde el formulario y guardarlos en el datastore. Para ello utilizaremos crearemos un objeto de nuestra clase Asistente y le asignamos las variables:

```
asistente = Asistente()  
sistente.idEvento = self.request.get('evento')  
asistente.nombre = self.request.get('nombre')  
```

Finalmente solo nos queda guardarlo:

```
asistente.put()  
```

En mi caso no es necesario crear una key para el objeto asistente puesto que se creará automáticamente al guardarlo.  

Un aspecto importante es que para que esto funcione, debe haber un archivo **__init__.py** (el archivo puede estar en blanco) en cada uno de los directorios donde tengamos nuestros **.py**.
