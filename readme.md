# TO DO:
* Los usuarios deberian mostrar el nombre en la lista de mensajes
    * Usar una entityCache?
    * Usar una especie de observer y setear un atributo en el HTML tag para que busque si está el usuario con id y lo reemplaza por nombre?
* Logout

# TO DOCUMENT:
* No va bootstrap
* El tema de CORS:
    * Tiraba que no permitia origen 'null'
    * Obligo a pasar el proyecto a otro node.js
    * Hubo que poner capa mas en middleware que escribiera response headers con Access-Control-Allow-Origin adecuado
    * También el Access-Control-Allow-Headers
* Action en la form estaba dando resultados raros, haciendo que se recargue la página automáticamente e invocando failCallback
* Mocha + Chai instalados en server, modificaciones en client. mocha.run() desde consola para correr

# WISH LIST:
* Registración
* La lista de usuarios tiene una animacion rara
* La lista de usuarios tendría que tener un background como el contenedor central
* El botón de salir tendría que tener el mismo estilo que el del "Nueva cuenta"
* Instalar Swal para alertas
* favicon