(function () {
  define("modules/vin/wmi", ["jquery"], function ($) {
    return {
      getZone: function(wmi) {
        var zones = {
              africa: /^[A-H]/i,
              asia: /^[J-R]/i,
              europe: /^[S-Z]/i,
              northAmerica: /^[1-5]/i,
              oceania: /^[6-7]/i,
              southAmerica: /^[8-9]/i
            };

        for(var zone in zones) {
          if(zones[zone].test(wmi)) {
            return zone;
          }
        }

        return "unknown";

      },

      getCountry: function(wmi) {
        return "";
      }
    };
  });
})();
