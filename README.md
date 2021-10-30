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

enemos que usar loaders de CSS para que webpack pueda entender estos archivos y trabajar con ellos.

npm i mini-css-extract-plugin css-loader -D para lograr esto.

Podemos hacer que webpack tambien entienda los prepocesadores de CSS:

npm install --save-dev stylus stylus-loader  por ejemplo para stylus.

css-loader ⇒ Loader para reconocer CSS
mini-css-extract-plugin ⇒ Extrae el CSS en archivos
Para comenzar debemos agregar las configuraciones de webpack


,
      {
        test: /\.css|.styl$/i,
        use: [MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ],
      }
## Copia de archivos con Webpack

Si tienes la necesidad de mover un archivo o directorio a tu proyecto final podemos usar un plugin llamado “copy-webpack-plugin”
Para instalarlo debemos ejecutar el comando

npm i copy-webpack-plugin -D



Resolve o Join path
Cuando trabajamos en entorno de Node, habrán ocasiones que deberamos describir, mediante una dirección absoluta, el directorio de trabajo. En Node, tenemos una libreía nativa pathpara resolver este caso.

Abrán veces que necesitmeos resolver o unir directorios de trabajos. Donde, con una simple declaración, podriamos caer en un sencillo copy & paste sin entender sus efectos (que pudiesen ser similares).

Cuando deseen estructurar un directorio de trabajo a partir de una dirección absoluta, sin importar el SO, se utiliza path.resolve([...paths]) por ello, si queremos utilizar nuestro directorio de trabajo como una referencia, utilizamos __dirname y de ahí, resolverá el conjunto de paths que le anexemos:

/*
En nuestro ejemplo, resolverá nuestro path en /user/path/to/workdirectory/ + src + assets/images
quedando algo similar a /users/path/to/js-portfolio/src/assets/images
*/
path.resolve(__dirname, 'src', 'assets/images')
Se tendrá que ser cuidadoso en el proceso de construcción porque cada forma de escribir el path, generará en un path diferente:

path.resolve('/foo/bar', './baz');
// Returns: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// Returns: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// If the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'


## Loaders de imágenes
<h4>Apuntes</h4>
Puedes usar una forma de importar las imágenes haciendo un import de las mismas y generando una variable
No es necesario instalar ninguna dependencia, webpack ya lo tiene incluido debemos agregar la siguiente configuración

module.exports = {
	...
  module: {
    rules: [
      {
        test: /\.png/,
        type: "asset/resource"
      }
    ]
  },
}


Algunos Pros:

Manejas el src de las imágenes de forma abstracta y más ordenada.

Quizás esté faltando alguna configuración extra, pero si la generación del hash para el nombre de la imagen fuese dinámica, obligas al navegador a romper el caché de la misma. Es decir; si actualizas el icono, por mas que se llame de la misma forma en tu repo, cuando la publiques obligas al navegador a romper el caché de la imagen para mostrar la última versión que subiste.

## Loaders de fuentes


Cuando utilizamos fuentes externas una buena práctica es descargarlas a nuestro proyecto
Debido a que no hara un llamado a otros sitios
Por ello es importante usarlo dentro de webpack
Para esta tarea instalaras y usaras “file-loader” y “url-loader”
instalación con NPM

npm install url-loader file-loader -D

La instalación de file-loader, url-loader y raw-loader ya no es necesario a partir de Webpack 5 ya que usando Asset Modules podemos hacer lo mismo y de forma optimizada.

La implementación de fonts quedaría de la siguiente manera:

      {
        test: /\.(woff|woff2)$/i,  // Tipos de fuentes a incluir
        type: 'asset/resource',  // Tipo de módulo a usar (este mismo puede ser usado para archivos de imágenes)
        generator: {
          filename: 'static/fonts/[hash][ext][query]',  // Directorio de salida
        },
      },
## Optimización: hashes, compresión y minificación de archivos
 ¿Por qué es importante usar Hashes en nuestros archivos?
Los recursos que se guardan en memoria cache suceden cuando el navegador entra a un sitio por primera vez detecta los recursos y los guarda. Por ello la siguiente vez sera mucho más rápido porque estarán en memoria
La desventaja esta cuando sacamos una nueva versión, porque tendrán un mismo nombre evitando que se descargue los nuevos cambios, por lo tanto, el usuario no recibirá los nuevos cambios
Para que no haya conflictos con la cache una vez que tengamos nuestro proyecto en producción es importante darles un hash para cada nueva versión


Unos de las razones por que utilizamos webpack es porque nos permite optimizar y comprimir nuestro proyecto
Debes utilizar los siguientes paquetes
css-minimizer-webpack-plugin ⇒ Nos ayuda a comprimir nuestros archivos finales CSS
terser-webpack-plugin ⇒ Permite minificar de una mejor forma

npm i css-minimizer-webpack-plugin

Segun la documentación oficial de webpack nos comunica que actualmente terser-webpack-plugin viene incluido desde webpack 5

optimization. minimizer - para sobreescribir la configuración por default de Terser y permitir el uso de varios minificadores

 optimization: {
    minimize: true,
            minimizer: [
                new CssMinimizerPlugin(),
                new TerserPlugin()
            ],
  },
## Webpack Alias

Alias ⇒ nos permiten otorgar nombres paths específicos evitando los paths largos
Para crear un alias debes agregar la siguiente configuración a webpack

stos alias los vamos a poder utilizar dentro de nuestro proyecto para que cuando webpack lo prepare va a identificar que esta es la ruta a la que tenemos que entrar

Luego agregamos estos alias en nuestras rutas en nuestro archivo de js
import Template from '@templates/Template.js';
import '@styles/main.css';

##  Variables de entorno

Es importante considerar las variables de entorno va a ser un espacio seguro donde podemos guardar datos sensibles
Por ejemplo, subir llaves al repositorio no es buena idea cuando tienes un proyecto open source
Para instalar debemos correr el comando

npm install -D dotenv-webpack

Posteriormente debemos crear un archivo .env donde estarán la clave para acceder a la misma y el valor que contendrán

# Ejemplo
API=https://randomuser.me/api/
Es buena idea tener un archivo de ejemplo donde, el mismo si se pueda subir al repositorio como muestra de que campos van a ir
Una vez creado el archivo .env debemos agregar la siguiente configuración en webpack.config.js

...
const Dotenv = require('dotenv-webpack');
module.exports = {
	...
	plugins: [
		new Dotenv()
  ],
}
dotenv-webpack ⇒ Leera el archivo .env por defecto y lo agregar a nuestro proyecto
Para usarlas debes hacer lo siguiente
const nombre = process.env.NOMBRE_VARIABLE;
Toda la configuración se podrá acceder desde process.env


Es importante saber que las variables de entorno (NODE js),

.env
por convencion se escriben en Mayuscula y con formato SNAKE_CASE

process.env.API_APP


recordemos que el archivo .env debe estar por fuera del src y si no funciona despues de instalar ( npm install -D dotenv-webpack) deberás eliminar la carpeta node_modules y el archivo package-lock.json