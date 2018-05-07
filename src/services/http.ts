import { Service } from 'typedi'
import * as request from 'request-promise'

@Service('core.http')
export class HttpClient {
  public async get(url: string) {
    return request.get(url)
  }
}
