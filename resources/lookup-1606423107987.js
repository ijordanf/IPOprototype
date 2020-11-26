(function(window, undefined) {
  var dictionary = {
    "46bc6a3d-4caa-4bf3-83ba-1d576debf4db": "Medidas Accesibilidad - Icon",
    "7c2d27bd-d651-42ed-a4c5-cf9d299ac752": "Compra - Icon",
    "a8a5d142-6b77-4806-b7e0-9f78d8f6debb": "Medidas bioseguridad - Icon",
    "ca4b370b-49e6-4ca2-9589-7c5690a29cb3": "Inicio Cal",
    "5f355ac6-2541-49a7-928d-772cf424ac15": "Rutas - Icon",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);