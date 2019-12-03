export class HikingWeather {
    async getWeatherByDate(date) {
        let response = await fetch(`api.openweathermap.org/data/2.5/forecast?city=${city}lat=47.6062&lon=-122.3321&appid=${process.env.API_KEY}`);
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
        } catch(error) {
        console.error("There was an error handling your request:" + error.message);    
        }
    }
