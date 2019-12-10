window.onload = () => {
  var loc = [
    [41.3851, 2.1734, "barcelona"],
    [34.516667, 69.183333, "kabul"],
    [42.5648, -114.4617, "usa"],
    [40.5648, -110.4617, "usa1"],
    [38.5648, -100.4617, "usa2"]
  ];

  var mymap = L.map("map").setView([0, 0], 1);

  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: 8,
      minZoom: 1
    }
  ).addTo(mymap);
  //   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     attribution:
  //       '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  //   }).addTo(mymap);

  L.control.scale().addTo(mymap);

  var hl = L.heatLayer(
    loc.map(x => [x[0], x[1]]),
    {
      radius: 15,
      minOpacity: 0.4
      // maxZoom: 0.01
    }
  ).addTo(mymap);

  loc.forEach(el => {
    L.marker([el[0], el[1]], {
      icon: L.divIcon({
        className: "circle",
        iconSize: [50, 50]
      })
    })
      .bindTooltip(el[2])
      .addTo(mymap);
  });
};
