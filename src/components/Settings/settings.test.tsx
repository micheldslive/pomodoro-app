import { getRenderer } from '@/core/tests/helper'
import Settings from '.'
import { initialStates } from '@/core/zustand'

describe('<Settings />', () => {
  test('enders the settings pane', () => {
    const { container } = getRenderer(<Settings {...initialStates} />)
    const settingsPane = container.querySelector('.preferences__pane')

    expect(settingsPane).toBeInTheDocument()
  })
})
