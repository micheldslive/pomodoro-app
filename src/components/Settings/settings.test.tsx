import { getRenderer } from '@/core/tests/helper'
import Settings from '.'
import { initialStates } from '@/core/zustand'

describe('<Settings />', () => {
  test('enders the settings pane', () => {
    const { container } = getRenderer(<Settings {...initialStates} />)
    const settingsPane = container.getElementsByClassName('preferences__pane')

    expect(settingsPane.length).toBe(1)
  })
})
