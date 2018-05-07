import { Container } from 'typedi'
import { HttpClient } from '../src/services/http'
// tslint:disable-next-line
import '../src/services/http'

describe('HTTP Client', () => {
  it('should initialize', async () => {
    const client = Container.get<HttpClient>('core.http')
    expect(client).toBeTruthy()
  })

  it('should get HTML from Google', async done => {
    const client = Container.get<HttpClient>('core.http')
    const response = await client.get('https://google.com')
    expect(response).toBeTruthy()
    done()
  })
})
