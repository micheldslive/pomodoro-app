import { Button } from '.'
import { expect, test } from 'vitest'
import { getRenderer } from '@/core/tests/helper'

describe('<Button />', () => {
  test('renders a close button to close settings', () => {
    const { getByText } = getRenderer(<Button type='close' text='×' />)
    const closeButton = getByText(/×/i)
    expect(closeButton).toBeInTheDocument()
  })

  it('renders an apply button for settings', () => {
    const { getByText } = getRenderer(
      <Button type='apply' text='Apply' />,
    )
    const applyButton = getByText(/apply/i)
    expect(applyButton).toBeInTheDocument()
  })

  it('renders a button to show settings', () => {
    const { getByRole } = getRenderer(<Button type='settings' />)
    const settingsButton = getByRole('button')
    expect(settingsButton.classList.contains('pomodoro-app__preferences')).toBe(
      true,
    )
  })
})
