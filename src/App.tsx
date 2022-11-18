import './styles/main.scss'
import Header from '@/components/Header'
import Controls from '@/components/Controls'
import TimerDisplay from '@/components/TimerDisplay'
import { Button } from '@/components/Button'
import Settings from '@/components/Settings'
import { useEffect } from 'react'
import { useSounds } from '@/core/utils'
import { useStore } from '@/core/zustand'

function App() {
  const states = useStore()
  const {
    secondsLeft,
    setSecondsLeft,
    isActive,
    setIsActive,
    setText,
    volume,
  } = states

  const { up } = useSounds(Number(volume))

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSecondsLeft(secondsLeft - 1)
      }, 1000)

      if (secondsLeft === 0) {
        clearInterval(interval)
        setIsActive(false)
        setText('')
        up()
      }

      return () => clearInterval(interval)
    }
  }, [isActive, secondsLeft, up])

  return (
    <div className='pomodoro-app'>
      <Header text='pomodoro' />
      <Controls {...states} />
      <TimerDisplay {...states} />
      <Button type='settings' />
      <Settings {...states} />
    </div>
  )
}

export default App
