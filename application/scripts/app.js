(function() {

  require.config({
    urlArgs: "v=0.01",
    paths: {
      jquery: "../libs/jquery/dist/jquery.min",
      bootstrap: "../libs/bootstrap-sass/assets/javascripts/bootstrap.min.js"
    }
  });

  define(["modules/vin"]);

})();
