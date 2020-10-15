$(document).ready(function(){

    $('#submitWeather').click(function(){

        var city = $("#city").val();

        if(city != ''){

            $.ajax({
                url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=354066b87e50cb0f9f088e152dd8cf35`,
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    
                    var widget = show(data);

                    $("#show").html(widget);

                    $("#city").val('');


                }
            });
        }else {
            $("#error").html('Field cannot be empty!')
        }
    });
});



function show(data){
    return  "<h2 class='resultTitle'>Current Weather for " + data.name + ", " + data.sys.country+"</h2>"+
            "<h3 class='resultData'><strong>Weather</strong>: "+ data.weather[0].main +"</h3>"+
            "<h3 class='resultDescription'><strong>Description</strong>: <img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png'>"+ data.weather[0].description +"</h3>"+
            "<h3 class='resultData'><strong>Temperature</strong>: "+ data.main.temp +"&deg;C</h3>"+
            "<h3 class='resultData'><strong>Pressure</strong>: "+ data.main.pressure +"hPa</h3>"+
            "<h3 class='resultData'><strong>Humidity</strong>: "+ data.main.humidity +"%</h3>"+
            "<h3 class='resultData'><strong>Temp_min</strong>: "+ data.main.temp_min +"&deg;C</h3>"+
            "<h3 class='resultData'><strong>Temp_max</strong>: "+ data.main.temp_max +"&deg;C</h3>"+
            "<h3 class='resultData'><strong>Wind.speed</strong>: "+ data.wind.speed +"m/s</h3>"+
            "<h3 class='resultData'><strong>Wind.deg</strong>: "+ data.wind.deg +"</h3>";
}


            







