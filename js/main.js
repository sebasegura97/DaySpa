// Botones seccion Productos //
document.getElementById("spanItems1").addEventListener('click', function (onclick) {
            console.log("Si funciono");
            document.getElementById("itemDescription1").classList.toggle("toggleItemDescription");
        });
document.getElementById("spanItems2").addEventListener('click', function (onclick) {
            console.log("Si funciono");
            document.getElementById("itemDescription2").classList.toggle("toggleItemDescription");
        });
document.getElementById("spanItems3").addEventListener('click', function (onclick) {
            console.log("Si funciono");
            document.getElementById("itemDescription3").classList.toggle("toggleItemDescription");
        });
document.getElementById("spanItems4").addEventListener('click', function (onclick) {
            console.log("Si funciono");
            document.getElementById("itemDescription4").classList.toggle("toggleItemDescription");
        });


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdownButton')) {

    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('toggleDropdown')) {
        openDropdown.classList.remove('toggleDropdown');
      }
    }
  }
}

// MAPA

// function myMap() {
// var mapProp= {
//     center:new google.maps.LatLng(51.508742,-0.120850),
//     zoom:5,
// };
// var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
// }

function initMap() {
        var uluru = {lat: -24.784954, lng: -65.417406};
        var map = new google.maps.Map(document.getElementById('myMap'), {
          zoom: 19,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
