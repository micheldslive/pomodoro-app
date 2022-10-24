import ReactDOM from 'react-dom'
import TimerDisplay from '.'

describe('<TimerDisplay />', () => {
  it('TimerDisplay renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<TimerDisplay />, div)
  })
})
