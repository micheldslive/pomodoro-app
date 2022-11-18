import { expect, test } from 'vitest'
import { getRenderer } from '@/core/tests/helper'
import Header from '.'

describe('<Header />', () => {
  test('renders pomodoro in Header title', () => {
    const { getByText } = getRenderer(<Header text='pomodoro' />)
    const appTitle = getByText(/pomodoro/i)
    expect(appTitle).toBeInTheDocument()
  })
})
