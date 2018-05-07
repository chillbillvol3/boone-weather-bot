import { HttpClient } from './http'
import { Service, Inject } from 'typedi'

@Service('core.weather')
export class WeatherApi {
  constructor(@Inject('core.http') private _http: HttpClient) {}

  public getCurrentWeather(): any {
    return this._http.get(
      'http://api.openweathermap.org/data/2.5/weather?q=Gulfport,us&APPID=6bdcbdedc353fd3d86feed794011a838'
    )
  }

  public getCurrentDate(currentDate: Date) {
    switch (currentDate.getDay()) {
      case 0:
        return 'Sunday'
      case 1:
        return 'Monday'
      case 2:
        return 'Tuesday'
      case 3:
        return 'Wednesday'
      case 4:
        return 'Thursday'
      case 5:
        return 'Friday'
      case 6:
        return 'Saturday'
    }
  }
}
