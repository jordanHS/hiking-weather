import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import { HikingWeather } from './hiking-weather-service';

$(document).ready(function() {
  $('#hikingDate').click(function() {
    const city = $('#date').val();
    $('#date').val("");

    (async () => {
      let hikingWeather = new HikingWeather();
      const response = await hikingWeather.getWeatherByCity(city);
      console.log(response);
      getElements(response);
      
    })();
  
  function getElements(response) {
    if (response.list.length > 0) {
      response.list.forEach ((item) => {
        let date = item.list[0].dt_txt.split("-");
      })
    }
  }
  
});
});
    
