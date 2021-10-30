## Usar webpack en el proyecto

Webpack es una herramienta que nos permite preparar nuestro código para llevarlo a producción (module bundler),Webpack es un module bundler que nos permite trabajar con una variedad de tecnologías web empezando desde HTML y terminando con JS. Además de tener soporte para archivos estáticos

Para usar packages de desarrollo (que instalamos para el proyecto) como webpack o webpack-cli podemos ejecutar el comando npx

 npx webpack

 por defecto webpack va a buscar el archivo src/index.js.

Al ejecutar el siguiente comando, Webpack crea la caepeta dist, esto lo hace por defecto si no configuramos webpack.

npx webpack
Para que al ejecutar el anterior comando, no nos de un warning debemos colocar el modo en que va a trabajar webpack.

npx webpack --mode production
npx webpack --mode development


## Conceptos Básicos Webpack
.
Entry (punto de entrada): este le indica a webpack cual modulo de JavaScript debe de usar para empezar a crear una salida.
Ejemplo : index.js. también podemos tener múltiples puntos de entrada pero eso es otra historia.
.
Output (punto de salida): Este archivo es el bundle o nuestro archivo de salida, seria nuestra caja donde empaquetamos toda nuestra aplicación, normalmente este archivo final se crea en una carpeta llamada dist
.
Loader (transformador): Los loaders lo que hacen es decirle a webpack como tiene que transformar el código de un modulo en concreto. Ejemplo : Los loaders pueden transformar ficheros a JavaScript, o cargar CSS directamente en archivos JS, (si usas reactjs ya sabrás como)
.
Plugins (complementos): Nos van a ayudar a extender las funcionalidades con los loaders, añadir otras configuraciones.
Ejemplo : hay un modulo llamado HTMLWebpackPlugin que este se encarga de crear un HTML personalizado que le inyecta todos los bundles finales que compilamo## Usar webpack en el proyecto

Webpack es una herramienta que nos permite preparar nuestro código para llevarlo a producción (module bundler),Webpack es un module bundler que nos permite trabajar con una variedad de tecnologías web empezando desde HTML y terminando con JS. Además de tener soporte para archivos estáticos

## Configurar webpack

Crear archivo de configuración webpack.config.js

El archivo de configuración nos va ayudar a poder establecer la configuración y elementos que vamos a utilizar.

Para poder crear el archivo de configuración en la raíz del proyecto creamos un archivo llamado webpack.config.js

En el mismo debemos decir El punto de entrada Hacia a donde a enviar la configuración de nuestro proyecto Las extensiones que vamos usar

El flag —config indica donde estará nuestro archivo de configuración
npx webpack --mode production --config webpack.config.js

Para poder hacerlo más amigable el comando puedes crear un script en package.json

    "build": "webpack --mode production --config webpack.config.js"


"build": "webpack --mode production" para modo de producción y minificado
"dev": "webpack --mode development" para modo de desarrollo y no minificado

    ## Babel Loader para JavaScript

    Babel te permite hacer que tu código JavaScript sea compatible con todos los navegadores
Debes agregar a tu proyecto las siguientes dependencias:

npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D

babel-loader nos permite usar babel con webpack
@babel/core es babel en general
@babel/preset-env trae y te permite usar las ultimas características de JavaScript
@babel/plugin-transform-runtime te permite trabajar con todo el tema de asincronismo como ser async y await

Debes crear el archivo de configuración de babel el cual tiene como nombre .babelrc

aqui configuras los presents que te permite trabajar con javacript moderno ylos plugins


## configurar babl en webpack
Vamos a añadir esta configuración de babel a webpack para que lo podamos utilizar en el.

Elementos nuevos añadidos:

module: Es el sitio donde vamos a añadir la nueva configuración de babel.
rules: Las reglas que se establecerán dentro del proyecto.
test: qué tipo de extensiones vamos a trabajar, o cuáles archivos vamos a transformar. Para ello utilizaremos regEx.
exclude: Necesitamos excluir archivos para evitar dañar nuestro proyecto, especificamente archivos de /node_modules/
use: Aquí vamos a definir qué loader vamos a utilizar para la transformación.
Básicamente Webpack leerá toda la instrucción de la siguiente manera: "Cuando encuentres un import o un require con extensión .mjs o .js, usa babel-loader para transformarlo antes de empaquetarlo.*

## HtmlWebpackPlugin

Vamos a preparar nuestro webpack para que este pueda entender HTML y prepararlo para la carpeta de Distribution

Primero vamos a necesitar instalar un Plugin para la configuracion de webpack asi este podra trabajar mejor con HTML

A esta fecha al descargar webpack está disponible la versión 5.36.2 , por tanto, al instalar el plugin con el comando que se muestra en el curso, se instaló la versión 5 del plugin:
npm i html-webpack-plugin -D

Pero si por alguna razón ya tenías instalado webpack en una versión anterior, ejemplo webpack 4.36, entonces debería s instalar la versión del plugin 4

npm i -D html-webpack-plugin@4

Después añadimos esta dependencia a la configuración de webpack

hacemos una instancia de lo que definimos en el inicio del archivo
le anadimos por parametro un objeto donde vamos a tener las
configuraciones que le vamos anadir a nuestro plugin

Para fijar el título en el HTML desde el plugin, se puede hacer de la siguiente manera:

webpack.config.js:

new HtmlWebpackPlugin({
title: 'título de mi app',
})
template html:

<head>
	<title><%= htmlWebpackPlugin.options.title %><</title>
</head>


## Loaders para CSS y preprocesadores de CSS

Fuera de contexto, webpack solamente entiende JavaScript y JSON. Los loaders nos permite procesar archivos de otros tipos para convertirnos en módulos válidos que serán consumidos por nuestras aplicaciones y agregadas como dependencias.

En alto nivel, los loaders poseen 2 configuraciones principales:

test - propiedad que identifica cuáles archivos deberán ser transformados
use - propiedad que identifica el loader que será usado para transformar a dichos archivos
Plugins
Mientras los loaders transforman ciertos tipos de módulos, los plugins _son utilizados para extender tareas específicas, como la optimización de paquetes, la gestión de activos y la inyección de variables de entorno.

Una vez importado el plugin, podemos desear el personalizarlos a través de opciones.


<h4>Ideas/conceptos claves</h4>
Un preprocesador CSS es un programa que te permite generar CSS a partir de la syntax única del preprocesador. Existen varios preprocesadores CSS de los cuales escoger, sin embargo, la mayoría de preprocesadores CSS añadirán algunas características que no existen en CSS puro, como variable, mixins, selectores anidados, entre otros. Estas características hacen la estructura de CSS más legible y fácil de mantener.

post procesadores son herramientas que procesan el CSS y lo transforman en una nueva hoja de CSS que le permiten optimizar y automatizar los estilos para los navegadores actuales.

<h4>Apuntes</h4>
Para dar soporte a CSS en webpack debes instalar los siguientes paquetes
Con npm

css-loader ⇒ Loader para reconocer CSS
mini-css-extract-plugin ⇒ Extrae el CSS en archivos
Para comenzar debemos agregar las configuraciones de webpack





