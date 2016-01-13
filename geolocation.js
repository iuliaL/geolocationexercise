$("#error").hide();
$("#hud").show();

//Getting the actual coordinates using built-in methods of javascript
//from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
navigator.geolocation.getCurrentPosition(function(position){
	console.log(position.coords.latitude);
	console.log(position.coords.longitude);
});


navigator.geolocation.getCurrentPosition(gotLocation);


function gotLocation(currentPosition) {
  $("#hud").hide();

  var $restaurants = $("span"); //  this var is now an array of the span jquery objects
  //so by the following .each i am cycling over the spans in the $restaurants
  
  $restaurants.each(function(){
    var restaurantLatitude = $(this).data("lat");
    var restaurantLongitude = $(this).data("lon");
    
    var distance = calculateDistance(currentPosition.coords.latitude, currentPosition.coords.longitude, restaurantLatitude, restaurantLongitude);
    
    $(this).text(distance + " km");
  }); //end each;
} // end gotLocation

function displayError(message) {
  $("#error").text(message).slideDown("slow");
}