import 'reflect-metadata'
import DummyClass from '../src/boone-weather-bot'
import { Container } from 'typedi'
import { WeatherApi } from '../src/services/weather-api'
import { HttpClient } from '../src/services/http'
// tslint:disable-next-line
import '../src/services/weather-api'
// tslint:disable-next-line
import '../src/services/http'

class FakeHttpClient extends HttpClient {
  public async get(url: string): Promise<any> {
    return true
  }
}

describe('Weather API', () => {
  let http: HttpClient
  let api: WeatherApi

  beforeEach(() => {
    Container.set('core.http', new FakeHttpClient())
    api = Container.get<WeatherApi>('core.weather')
  })

  it('Retrieves current weather from the API via HttpClient', async () => {
    const result = await api.getCurrentWeather()
    expect(result).toBe(true)
  })

  it('Retrieves the current day and returns english version', () => {
    expect(api.getCurrentDate(new Date())).toBe('Monday')
  })
})
