import 'reflect-metadata'
import { Container } from 'typedi'
import { WeatherApi } from '../src/services/weather-api'
import { HttpClient } from '../src/services/http'
// tslint:disable-next-line
import '../src/services/weather-api'
// tslint:disable-next-line
import '../src/services/http'

describe('Sunny', () => {
  it('Should access the API', async done => {
    const api: WeatherApi = Container.get('core.weather')
    const response = await api.getCurrentWeather()
    const parsed = JSON.parse(response)
    expect(parsed.coord).toBeTruthy()
    done()
  })
})
