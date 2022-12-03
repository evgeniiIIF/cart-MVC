const mix = require("laravel-mix");

mix.js("src/assets/js/main.js", "assets/js");

mix.sass("src/assets/sass/main.scss", "assets/css/");

mix.options({
  legacyNodePolyfills: true,
  processCssUrls: false,
  postCss: [
    require("postcss-custom-properties"),
    require("autoprefixer")({
      cascade: false,
    }),
  ],
});

mix.copy("./src/index.html", "dist");
mix.copyDirectory("./src/assets/img", "dist/assets/img");
mix.copyDirectory("src/assets/fonts", "dist/assets/fonts");

mix.setPublicPath("dist");

mix.version();
