import { Service } from 'typedi'

@Service('core.config')
export class GlobalConfig {
  private _config: any = {}

  public set(key: string, value: any) {
    this._config[key] = value
  }
  public get(key: string) {
    return this._config[key]
  }
}
