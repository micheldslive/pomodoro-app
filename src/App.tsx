import './App.css'
import Header from '@/components/Header'
import Controls from '@/components/Controls'
import TimerDisplay from '@/components/TimerDisplay'
import { Button } from '@/components/Button'
import Settings from '@/components/Settings'
import { useEffect } from 'react'
import { useStatesContext } from '@/core/context'
import { useSounds } from '@/core/utils'

function App() {
  const {
    secondsLeft,
    setSecondsLeft,
    isActive,
    setIsActive,
    setButtonText,
    volume,
  } = useStatesContext()

  const { up } = useSounds(volume)

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSecondsLeft(secondsLeft - 1)
      }, 1000)

      if (secondsLeft === 0) {
        clearInterval(interval)
        setIsActive(false)
        setButtonText('')
        up()
      }

      return () => clearInterval(interval)
    }
  }, [isActive, secondsLeft, up])

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
