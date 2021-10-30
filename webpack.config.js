const path =require ('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');
module.exports = {
    // Entry nos permite decir el punto de entrada de nuestra aplicación
    entry: "./src/index.js",
    // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
    output: {
      // path es donde estará la carpeta donde se guardará los archivos
      // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
      path: path.resolve(__dirname, "dist"),
      // filename le pone el nombre al archivo final
      filename: "main.js"
    },
    resolve: {
      // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
      extensions: [".js",".jsx"],
       //Agregamos una key alias a nuestro objeto resolve
      //para ponerles nombres mas pequenos a las extensiones
        //de nuestros archivos
    alias:{
        '@utils': path.resolve(__dirname, 'src/utils/'),
        '@templates': path.resolve(__dirname, 'src/templates/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@images': path.resolve(__dirname, 'src/assets/images/'),
      },
    },
    module: {
        rules: [
          {
            // Test declara que extensión de archivos aplicara el loader
            test: /\.js$/,
            // Use es un arreglo u objeto donde dices que loader aplicaras
            use: {
              loader: "babel-loader"
            },
            // Exclude permite omitir archivos o carpetas especificas
            exclude: /node_modules/
          },
          {
            test: /\.png/,
            type: "asset/resource"
          },
          {
            test: /\.css|.styl$/i,
            use: [MiniCssExtractPlugin.loader,
              'css-loader',
              'stylus-loader'
            ],
          },  {
            test: /\.(woff|woff2)$/i,  // Tipos de fuentes a incluir
            type: 'asset/resource',  // Tipo de módulo a usar (este mismo puede ser usado para archivos de imágenes)
            generator: {
              filename: 'static/fonts/[hash][ext][query]',  // Directorio de salida
            },
          },

        ]

      },
      optimization: {
        minimize: true, minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ],
      },
plugins: [
    new HtmlWebpackPlugin({
        inject: true,
        template: './public/index.html',
        filename: './index.html',
        title: 'Portafolio',
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({ // CONFIGURACIÓN DEL COPY PLUGIN
        patterns: [
            {
                from: path.resolve(__dirname , "src" , 'assets/images'), // CARPETA A MOVER AL DIST
                to: "assets/images" // RUTA FINAL DEL DIST
            }
        ]
    }), new Dotenv()

]

  }
