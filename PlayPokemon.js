

var latitude = 51.508742;
var longitude = -0.120850;
//Khoi tao Map
function initialize() {


   //Khai bao cac thuoc tinh
   var mapProp = {
      //Tam ban do, quy dinh boi kinh do va vi do
      center: new google.maps.LatLng(latitude, longitude),

      //set default zoom cua ban do khi duoc load
      zoom: 20,
      //Dinh nghia type
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };
   //Truyen tham so cho cac thuoc tinh Map cho the div chua Map
   var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
function showPosition(position) {
   latitude = position.coords.latitude;
   longitude = position.coords.longitude;
   console.log(latitude + "  " + longitude + "ShowPosition")
}
function getLocation() {
   if (navigator.geolocation) {
      var data = navigator.geolocation.watchPosition(showPosition);

   } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
   }
}
//   var p =new Promise(async resolve => {
//       try {
//          await getLocation();
//          console.log(latitude + "  "+longitude);
//       } catch (error) {
//           return resvolve({ error: true, message: error.message });
//       }
//   });
getLocation();
console.log(latitude + "  " + longitude);
google.maps.event.addDomListener(window, 'load', initialize)






