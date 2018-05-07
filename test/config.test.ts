/**
 * Two goals:
 *
 * 1. Successfully test that the .set() method sets config values
 * 2. Successfully test that the .get() method returns config values that have been set
 */
import 'reflect-metadata'
import { GlobalConfig } from '../src/services/config'
import { Container } from 'typedi'
// tslint:disable-next-line
import '../src/services/config'

describe('Configged', () => {
  it('Return the value sent in', () => {
    const config: GlobalConfig = Container.get('core.config')
    config.set('k', 525)
    const valueReceived = config.get('k')
    expect(valueReceived).toBe(525)
  })
})
