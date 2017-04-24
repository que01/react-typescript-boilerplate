/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');

const TsConfigPathsPlugin = require('awesome-typescript-loader').TsConfigPathsPlugin;
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/',
  }, options.output), // Merge with env dependent settings
  module: {
    loaders: [{
      test: /\.tsx?$/,
      use: options.tsLoaders,
    }, {
      // Do not transform vendor's CSS with CSS-modules
      // The point is that they remain in global scope.
      // Since we require these CSS files in our JS or CSS files,
      // they will be a part of our compilation either way.
      // So, no need for ExtractTextPlugin here.
      test: /\.css$/,
      include: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
      ],
    }, {
      // Transform our own .css files with PostCSS
      test: /^((?!\.module).)*(\.css)$/,
      exclude: [/node_modules/],
      use: options.cssLoaders,
    }, {
      // Transform our own .css files with PostCSS
      test: /^((?!\.module).)*(\.(scss|sass))$/,
      exclude: [/node_modules/],
      use: options.sassLoaders,
    }, {
      // Transform our own .local.css files with PostCSS and CSS-modules
      test: /\.module\.css$/,
      include: /app/,
      use: options.cssLoadersLocal,
    }, {
      // Transform our own .local.css files with PostCSS and CSS-modules
      test: /\.module\.(scss|sass)$/,
      include: /app/,
      use: options.sassLoadersLocal,
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      use: 'file-loader',
    }, {
      test: /\.(jpe?g|png|gif)$/,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 7,
            },
            pngquant: {
              quality: '65-90',
              speed: 4,
            },
          },
        },
      ],
    }, {
      test: /\.html$/,
      use: 'html-loader',
    }, {
      test: /\.json$/,
      use: 'json-loader',
    }, {
      test: /\.(mp4|webm)$/,
      use: 'url-loader?limit=10000',
    }],
  },
  plugins: options.plugins.concat([
    new TsConfigPathsPlugin(),
    new CheckerPlugin(),

    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        /* eslint-disable global-require */
        postcss() {
          return {
            default: [
              // Transfer @import rule by inlining content, e.g. @import 'normalize.css'
              // https://github.com/jonathantneal/postcss-partial-import
              require('postcss-partial-import')(),
              // Allow you to fix url() according to postcss to and/or from options
              // https://github.com/postcss/postcss-url
              require('postcss-url')(),
              // W3C variables, e.g. :root { --color: red; } div { background: var(--color); }
              // https://github.com/postcss/postcss-custom-properties
              require('postcss-custom-properties')(),
              // W3C CSS Custom Media Queries, e.g. @custom-media --small-viewport (max-width: 30em);
              // https://github.com/postcss/postcss-custom-media
              require('postcss-custom-media')(),
              // CSS4 Media Queries, e.g. @media screen and (width >= 500px) and (width <= 1200px) { }
              // https://github.com/postcss/postcss-media-minmax
              require('postcss-media-minmax')(),
              // W3C CSS Custom Selectors, e.g. @custom-selector :--heading h1, h2, h3, h4, h5, h6;
              // https://github.com/postcss/postcss-custom-selectors
              require('postcss-custom-selectors')(),
              // W3C calc() function, e.g. div { height: calc(100px - 2em); }
              // https://github.com/postcss/postcss-calc
              require('postcss-calc')(),
              // Allows you to nest one style rule inside another
              // https://github.com/jonathantneal/postcss-nesting
              require('postcss-nesting')(),
              // Unwraps nested rules like how Sass does it
              // https://github.com/postcss/postcss-nested
              require('postcss-nested')(),
              // W3C color() function, e.g. div { background: color(red alpha(90%)); }
              // https://github.com/postcss/postcss-color-function
              require('postcss-color-function')(),
              // Convert CSS shorthand filters to SVG equivalent, e.g. .blur { filter: blur(4px); }
              // https://github.com/iamvdo/pleeease-filters
              require('pleeease-filters')(),
              // Generate pixel fallback for "rem" units, e.g. div { margin: 2.5rem 2px 3em 100%; }
              // https://github.com/robwierzbowski/node-pixrem
              require('pixrem')(),
              // W3C CSS Level4 :matches() pseudo class, e.g. p:matches(:first-child, .special) { }
              // https://github.com/postcss/postcss-selector-matches
              require('postcss-selector-matches')(),
              // Transforms :not() W3C CSS Level 4 pseudo class to :not() CSS Level 3 selectors
              // https://github.com/postcss/postcss-selector-not
              require('postcss-selector-not')(),
              // Postcss flexbox bug fixer
              // https://github.com/luisrudge/postcss-flexbugs-fixes
              require('postcss-flexbugs-fixes')(),
              // Add vendor prefixes to CSS rules using values from caniuse.com
              // https://github.com/postcss/autoprefixer
              require('autoprefixer')({ // Allow future CSS features to be used, also auto-prefixes the CSS...
                browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
              }),
              postcssReporter({ // Posts messages from plugins to the terminal
                clearMessages: true,
              }),
            ],
            sass: [
              require('autoprefixer')({ // Allow future CSS features to be used, also auto-prefixes the CSS...
                browsers: ['last 2 versions', 'IE > 10'], // ...based on this browser list
              }),
              /* postcssFocus(), // Add a :focus to every :hover */
              postcssReporter({ // Posts messages from plugins to the terminal
                clearMessages: true,
              }),
            ],
          };
        },
        /* eslint-enable global-require */
        context: '/',
      },
    }),
  ]),
  resolve: {
    // needs to match any prefixes defined in the tsconfig.json#compilerOptions.paths property
    modules: ['./', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.react.js',
    ],
    mainFields: [
      'jsnext:main',
      'main',
    ],
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: false, // Don't show stats in the console
  // progress: true
});
