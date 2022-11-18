import ReactDOM from 'react-dom'
import Controls from '.'
import { initialStates } from '@/core/zustand'

describe('<Controls />', () => {
  it('controls render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Controls {...initialStates} />, div)
  })
})
