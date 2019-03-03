
  
  var latitude =51.508742;
  var longitude = -0.120850;
  function showPosition(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log(latitude + "  "+longitude +"hgjhkj" )
   }
   function getLocation() {
      if (navigator.geolocation) {
         var data = navigator.geolocation.watchPosition(showPosition);
        
      } else {
         x.innerHTML = "Geolocation is not supported by this browser.";
      }
   }

   

   console.log(latitude + "  "+longitude +"hgjhkj" )
//Khoi tao Map
function initialize() {


      //Khai bao cac thuoc tinh
      var mapProp = {
         //Tam ban do, quy dinh boi kinh do va vi do
         center: new google.maps.LatLng( latitude,longitude),
        
         //set default zoom cua ban do khi duoc load
         zoom: 20,
         //Dinh nghia type
         mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      //Truyen tham so cho cac thuoc tinh Map cho the div chua Map
      var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
   }
   if (window.Promise) { // Check if the browser supports Promises
      var promise = new Promise(function(resolve, reject) {
         getLocation();
      });
    }
   google.maps.event.addDomListener(window, 'load', initialize)


