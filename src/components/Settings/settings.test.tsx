import { getRenderer } from '@/core/tests/helper'
import Settings from '.'

describe('<Settings />', () => {
  test('enders the settings pane', () => {
    const { container } = getRenderer(<Settings />)
    const settingsPane = container.getElementsByClassName('preferences__pane')

    expect(settingsPane.length).toBe(1)
  })
})
