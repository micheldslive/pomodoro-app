import { getRenderer } from '@/core/tests/helper'
import Controls from '.'
import { initialStates } from '@/core/zustand'

describe('<Controls />', () => {
  test('should be have a Controls component', () => {
    const { container } = getRenderer(<Controls {...initialStates} />)
    const controls = container.getElementsByClassName('controls')

    expect(controls.length).toBe(1)
  })
})
