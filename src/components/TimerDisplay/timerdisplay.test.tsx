import ReactDOM from 'react-dom'
import TimerDisplay from '.'
import { initialStates } from '@/core/zustand'

describe('<TimerDisplay />', () => {
  it('TimerDisplay renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TimerDisplay {...initialStates} />, div)
  })
})
