(function(){
  define("modules/vin", ["jquery"], function($) {
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
        var manufacturer = vin.slice(0,3),
            vds = vin.slice(3,9),
            vis = vin.slice(9);

        console.log("manufacturer -> ", manufacturer);
        console.log("vds -> ", vds);
        console.log("vis -> ", vis);

        console.log([manufacturer, vds, vis].join("").length);
      }
    }.init();


  });
})();
