<h1>Components 2</h1>
More exciting adventures creating React components!

(app created by cloning apping boilerplate)

CREATE A REACT APP FROM SCRATCH - USING WEBPACK

1 - First set up the folder for the App, then open a terminal in the folder, and initialise (creates package.json): 

*//move into the folder*
 $>cd /folder
*//initialise*
 $>npm init -y

2 - *skip to 3, as webpack init will overwrite*
 Then create the basic html landing page in the folder, index.html:
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Site</title>
  </head>
  <body>
    <div id="root"></div>
        <script src="./node_modules/react/umd/react.development.js"></script>
        <script src="./node_modules/react-dom/umd/react-dom.development.js">            	</script>
        <script src="./dist/main.js"></script>
   </body>
   </html>

3 - install react and react-dom, and dependencies:
  $>>npm install react react-dom
*//using webpack dev server to serve content on localhost*
  $>>npm install --save-dev @babel/preset-env webpack webpack-cli webpack-dev-server @babel/core @babel/preset-react babel-loader 
$>>npm install --save-dev @babel/plugin-syntax-jsx
$>>npx webpack init 
*// will install @webpack-cli/generators, will ask if using ES6 or typescript, if you want to use webpack-dev-server, do you want to simplify html for the bundle, do you want pwa support, which css solution do you want - css, sass, less, stylus, will you be using post-css,do you want to extract css for every file, do you want to use prettier, pick a package manager (npm/yarn..).*
 

  At this point, the folder will now contain a node_modules folder, a src folder, and package.json, package-lock.json, postcss.config.js, webpack.config.js, .babelrc, and README.md files alongside the index.html file you created.

***********************

also, css:   *(check package.json as may be already installed)*
$>>npm install --save-dev css-loader
$>>npm install --save-dev mini-css-extract-plugin

$>npm i style-loader

new MiniCssExtractPlugin({
        test: /\.css$>/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }),
***********************


4 - check and tweak the package.json file (should be in main folder) (ensure "scripts" contains a 'start' or 'serve' command at minimum, so you can run the dev server - change the port to eg 8080 if desired), e.g.:
{
  "name": "my-webpack-project",
  "version": "1.0.0",
  "description": "My webpack project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode=production --node-env=production",
    "build:dev": "webpack --mode=development",
    "build:prod": "webpack --mode=production --node-env=production",
    "watch": "webpack --watch",
    "serve": "webpack serve"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.24.0",
    "@babel/plugin-syntax-jsx": "^7.23.3",
    "@babel/preset-env": "^7.24.0",
    "@babel/preset-react": "^7.23.3",
    "@webpack-cli/generators": "^3.0.7",
    "autoprefixer": "^10.4.17",
    "babel-loader": "^9.1.3",
    "css-loader": "^6.10.0",
    "html-webpack-plugin": "^5.6.0",
    "mini-css-extract-plugin": "^2.8.1",
    "postcss": "^8.4.35",
    "postcss-loader": "^8.1.0",
    "prettier": "^3.2.5",
    "style-loader": "^3.3.4",
    "webpack": "^5.90.3",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.0.2",
    "workbox-webpack-plugin": "^7.0.0"
  }
}
*// here <code$> npm run serve</code> is the command to run the app*

5 - in main folder, there will be a file .babelrc , containing :
 {
  "plugins": ["@babel/syntax-dynamic-import"],
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ]
}

*Change to:*
{
  "plugins": ["@babel/syntax-dynamic-import","@babel/plugin-syntax-jsx"],
  "presets": [
    [
          "@babel/preset-env",
          {
            "modules": false
          }
    ],
    [
         "@babel/preset-react",
         {
          "modules": true
         }
    ]
  ]
}

*//this allows webpack to parse jsx*

6 - in webpack.config.js:
  // Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$>/i,
                loader: 'babel-loader',
            },
            {
                test: /\.css$>/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$>/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};

7. Alter body content of index.html, so you can use createRoot:
  <body>
        <div id="root"></div>
    </body>

*// full html 5 code for index.html:*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Webpack Application</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
    
    <script>
        if ("serviceWorker" in navigator) {
            window.addEventListener("load", () => {
                navigator.serviceWorker
                    .register("service-worker.js")
                    .then((registration) => {
                        console.log("Service Worker registered: ", registration);
                    })
                    .catch((registrationError) => {
                        console.error("Service Worker registration failed: ", registrationError);
                    });
            });
        }
    </script>
</html>

8 - inside src folder will be index.js *(NB cannot be .jsx or webpack won't find it)*, containing default hello world:
console.log("Hello World!");
 
*change to:*

import React from 'react';
import { createRoot} from 'react-dom/client';
import App from './app';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);


9 -  in src folder create app.js:

import React from 'react';

function App() {
  return (
    <>
    <h1>
     Create a react app from scratch
    </h1>
    </>
  )
};
export default App


10 - now, in terminal try running the app:
$>npm start

or $>npm run serve 
*(when using webpack this is probably the one)*

depending on the script in package.json.
NB: favicons are unlikely to load on loaclhost due to CRS, short answer is to leave them out while in dev as they will show up once you run the production/build version. (undoing the crs just for a favicon seems excessive when it leaves your system vulnerable.)

*NB:favicon.io and similar will convert whatever image file you upload into a downloadable folder containing all the variants of the favicon you will need.*

