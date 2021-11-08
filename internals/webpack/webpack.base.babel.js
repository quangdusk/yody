/**
 * COMMON WEBPACK CONFIGURATION
 */

 const path = require("path");
 const webpack = require("webpack");
 const dotenv = require("dotenv");
 const fs = require("fs"); // to check if the file exists
 const ExtractTextPlugin = require("extract-text-webpack-plugin");
 module.exports = (options) => {
   let mode = "development";
   let tail = "";
   if (process.env.NODE_ENV) {
     mode = process.env.NODE_ENV;
     tail = process.env.NODE_CONFIG;
   } else if (process.env.UAT) {
     mode = process.env.UAT;
     tail = process.env.NODE_CONFIG;
   }
 
   // Get the root path (assuming your webpack config is in the root of your project!)
   const currentPath = path.join(__dirname);
 
   // Create the fallback path (the production .env)
   const basePath = `${currentPath}/.env`;
 
   // We're concatenating the environment name to our filename to specify the correct env file!
   const envPath = `${basePath}.${mode}.${tail}`;
 
   // Check if the file exists, otherwise fall back to the production .env
   const finalPath = fs.existsSync(envPath) ? envPath : basePath;
   // Set the path parameter in the dotenv config
   const fileEnv = dotenv.config({ path: finalPath }).parsed;
   // reduce it to a nice object, the same as before (but with the variables from the file)
   const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
     // eslint-disable-next-line no-param-reassign
     prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
     return prev;
   }, {});
   return {
     mode: options.mode,
     entry: options.entry,
     output: Object.assign(
       {
         // Compile into js/build.js
         path: path.resolve(process.cwd(), "app-build/build"),
         publicPath: "/",
       },
       options.output
     ), // Merge with env dependent settings
     optimization: options.optimization,
     module: {
       rules: [
         {
           test: /\.jsx?$/, // Transform all .js and .jsx files required somewhere with Babel
           exclude: /node_modules/,
           use: {
             loader: "babel-loader",
             options: options.babelQuery,
           },
         },
         {
           // Preprocess our own .css files
           // This is the place to add your own loaders (e.g. sass/less etc.)
           // for a list of loaders, see https://webpack.js.org/loaders/#styling
           test: /\.css$/,
           exclude: /node_modules/,
           use: ["style-loader", "css-loader"],
         },
         {
           // Preprocess 3rd party .css files located in node_modules
           test: /\.css$/,
           include: /node_modules/,
           use: ["style-loader", "css-loader"],
         },
         {
           test: /\.s[ac]ss$/i,
           use: [
             // Creates `style` nodes from JS strings
             "style-loader",
             // Translates CSS into CommonJS
             "css-loader",
             // Compiles Sass to CSS
             "sass-loader",
           ],
         },
         {
           test: /\.(eot|otf|ttf|woff|woff2)$/,
           use: "file-loader",
         },
         {
           test: /\.svg$/,
           use: [
             {
               loader: "svg-url-loader",
               options: {
                 // Inline files smaller than 10 kB
                 limit: 10 * 1024,
                 noquotes: true,
               },
             },
           ],
         },
         {
           test: /\.(jpg|png|gif)$/,
           use: [
             {
               loader: "url-loader",
               options: {
                 // Inline files smaller than 10 kB
                 limit: 10 * 1024,
               },
             },
             {
               loader: "image-webpack-loader",
               options: {
                 mozjpeg: {
                   enabled: false,
                   // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                   // Try enabling it in your environment by switching the config to:
                   // enabled: true,
                   // progressive: true,
                 },
                 gifsicle: {
                   interlaced: false,
                 },
                 optipng: {
                   optimizationLevel: 7,
                 },
                 pngquant: {
                   quality: "65-90",
                   speed: 4,
                 },
               },
             },
           ],
         },
         {
           test: /\.html$/,
           use: "html-loader",
         },
         {
           test: /\.(mp4|webm)$/,
           use: {
             loader: "url-loader",
             options: {
               limit: 10000,
             },
           },
         },
       ],
     },
     plugins: options.plugins.concat([
       // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
       // inside your code for any environment checks; Terser will automatically
       // drop any unreachable code.
       new webpack.EnvironmentPlugin({
         NODE_ENV: "development",
       }),
       new webpack.DefinePlugin(envKeys),
       new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|vi/),
     ]),
     resolve: {
       modules: ["node_modules", "app"],
       extensions: [".js", ".jsx", ".react.js"],
       mainFields: ["browser", "jsnext:main", "main"],
       alias: {
         moment$: "moment/moment.js",
       },
     },
     devtool: options.devtool,
     target: "web", // Make web variables accessible to webpack, e.g. window
     performance: options.performance || {},
   };
 };
 