import './App.css'
import Header from './components/Header'
import Controls from './components/Controls'
import TimerDisplay from './components/TimerDisplay'
import { Button } from './components/Button'
import Settings from './components/Settings'
import { useEffect } from 'react'
import useSound from 'use-sound'
import timesUpSfx from './sounds/timesUp.mp3'
import { useStatesContext } from './core/context'

function App() {
  const {
    secondsLeft,
    setSecondsLeft,
    isActive,
    setIsActive,
    setButtonText,
    volume,
  } = useStatesContext()

  const [timesUp] = useSound(timesUpSfx, {
    volume: volume,
  })

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSecondsLeft(secondsLeft - 1)
      }, 1000)

      if (secondsLeft === 0) {
        clearInterval(interval)
        setIsActive(false)
        setButtonText('')
        timesUp()
      }

      return () => clearInterval(interval)
    }
  }, [isActive, secondsLeft, timesUp])

  return (
    <div className='pomodoro-app'>
      <Header title='pomodoro' />
      <Controls />
      <TimerDisplay />
      <Button type='settings' />
      <Settings />
    </div>
  )
}

export default App
