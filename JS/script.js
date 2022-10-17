function initMap() {
  const center = { lat: -32.7861296, lng: -59.2223517 };

  var locales = [
    { lat: -34.5985351, lng: -58.391916 },
    { lat: -34.4973938, lng: -58.5135613 },
    { lat: -31.3972162, lng: -58.0259162 },
    { lat: -32.9400555, lng: -60.6669027 },
  ];

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: center,
  });

  let i = 0;

  let names = ["Buenos Aires", "Martínez", "Concordia", "Rosario"];



  for (i = 0; i < locales.length; i++) {
    let marker = new google.maps.Marker({
      position: locales[i],
      map: map,
      title: "Mi Tienda Café",
    });

    var text = names[i] + "<h1>Mi Tienda Café</h1>" + "<h3>Información</h3>";

    let information = new google.maps.InfoWindow({
      content: text,
    });

    marker.addListener("click", function () {
      information.open(map, marker);
    });
    
  }
}

window.initMap = initMap;