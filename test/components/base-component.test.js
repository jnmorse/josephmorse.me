import { expect, renderComponent } from './test-helpers'
import Base from '../../src/client/base'

describe('Base Component', () => {
  let component

  beforeEach(() => {
    component = renderComponent(Base)
  })

  it('should exist', () => {
    expect(component).to.exist
  })
})
