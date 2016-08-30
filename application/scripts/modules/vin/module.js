(function(){
  define("modules/vin/module", [
    "jquery",
    "modules/vin/decoder"
  ],
  function($, decoder) {
    return {
      form: $("form"),
      init: function() {
        this.events();
        console.log("hello world");
      },

      events: function() {
        this.form.on("submit", function(e){
          var vin = $(e.target).find("#vin").val();
          this.parse(vin || "");
        }.bind(this));
      },

      parse: function(vin) {
        console.log(decoder.decode(vin));
      }
    }.init();


  });
})();
