import { getRenderer } from '@/core/tests/helper'
import MuteToggle from '.'

describe('<MuteToggle />', () => {
  test('renders mute toggle', () => {
    const { getByRole } = getRenderer(<MuteToggle volume={true} />)
    const toggleButton = getByRole('button')
    expect(toggleButton.classList.contains('display__mute')).toBe(true)
  })
})
