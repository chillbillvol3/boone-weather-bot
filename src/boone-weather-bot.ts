import 'reflect-metadata'
import { Container } from 'typedi'
import { HttpClient } from './services/http'
import { WeatherApi } from './services/weather-api'
// tslint:disable-next-line
import '../src/services/http'
// tslint:disable-next-line
import '../src/services/weather-api'

// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

export default class DummyClass {
  static api() {
    return Container.get<WeatherApi>('core.weather')
  }
}
