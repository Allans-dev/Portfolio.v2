//obtain current location
$(document).ready(function(){
    
geo = navigator.geolocation;

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    getWeather(lat, lon);
  })
}
// calling api and obtaining ajax data
function getWeather (lat, lon) {
  var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon="
  + lon + "&APPID=a70166e768d349a3f6fe3921a4f6d313";
  $.ajax({
    url: url,
    type: "GET",
    dataType: "jsonp",
    success : function(data) {
      if (data){
        updateTemp(data.main.temp);
        $("#tempValue").append(Math.round(tempC));
        $("#location").append(data.name);
        $("#des").append(data.weather[0].description);
        updateIcon(data.weather[0].main);
        $("#tempUnits").css("display","inline-block");
      }
    }
  })
}
//temperature functions
$(document).ready(function(){
  $('#temp').click(function(){
if ($("#tempUnits i").hasClass('wi-celsius')) {
    $('#tempUnits i').removeClass('wi-celsius').addClass('wi-fahrenheit');
    $('#tempValue').html(Math.round(tempF));
  }else {
      $('#tempUnits i').removeClass('wi-fahrenheit').addClass('wi-celsius');
      $('#tempValue').html(Math.round(tempC));
    };

  });
});

//temperature
function updateTemp (kelvin){
 tempK = kelvin;
 tempC = kelvin - 273.15;
 tempF = ((kelvin*9)/5) - 459.67;
}

//icons
function updateIcon (condition){
  switch (condition) {
    case "Clouds":
    $(".icon").addClass("wi-cloudy");
      break;
    case "Clear":
    $(".icon").addClass("wi-moon-new");
      break;
    case "Thunderstorm":
    $(".icon").addClass("wi-thunderstorm");
      break;
    case "Drizzle":
    $(".icon").addClass("wi-showers");
      break;
    case "Rain":
    $(".icon").addClass("wi-rain");
      break;
    case "Snow":
    $(".icon").addClass("wi-snow");
      break;
    case "Atmosphere":
    $(".icon").addClass("wi-dust");
      break;
    case "Extreme":
    $(".icon").addClass("wi-storm-warning");
      break;
    case "Additional":
    $(".icon").addClass("wi-gale-warning");
    default:
    $(".icon").addClass("wi-na");
  }
}
    
});