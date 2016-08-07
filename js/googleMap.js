function initialize() {

  var mapProp = {
    center:new google.maps.LatLng(10.1623907,-68.897480),
    zoom:18,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    panControl:true,
    zoomControl:true,
    mapTypeControl:true,
    scaleControl:true,
    streetViewControl:true,
    overviewMapControl:true,
    rotateControl:true,
    scrollwheel: false
  };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  /* var place = new google.maps.LatLng(10.1623925,-68.8974899);
  var market = new google.maps.Marker({
    position: place,
    title: "Prueba",
    map: map
  });*/
}

google.maps.event.addDomListener(window, 'load', initialize);