(function() {
  define("modules/vin/decoder", [
    "jquery",
    "modules/vin/wmi"
  ],
  function ($, wmi) {
    return {
      decode: function(vin) {
        var manufacturer = vin.slice(0,3),
            vds = vin.slice(3,9),
            vis = vin.slice(9),
            data = {
              manufacturer: manufacturer,
              vds: vds,
              vis: vis,
              data: {
                zone: wmi.getZone(manufacturer),
                country: wmi.getCountry(manufacturer)
              }
            };

        return data;
      }
    };
  });
})();
