import ReactDOM from 'react-dom'
import Controls from '.'

describe('<Controls />', () => {
  it('controls render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Controls />, div)
  })
})
