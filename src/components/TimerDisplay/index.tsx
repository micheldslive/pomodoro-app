import { MuteToggle } from '@/components/MuteToggle'
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useStatesContext } from '@/core/context'
import { IMapedNumbers } from '@/core/types'
import { calcPercentage, formatTimeLeft, useSounds } from '@/core/utils'
import { MouseEvent } from 'react'

const TimerDisplay = () => {
  const {
    timerMode,
    pomoLength,
    shortLength,
    longLength,
    secondsLeft,
    isActive,
    setIsActive,
    buttonText,
    setButtonText,
    volume,
  } = useStatesContext()

  const Percentage = () => {
    const type: IMapedNumbers = {
      pomo: pomoLength,
      short: shortLength,
      long: longLength,
    }

    return calcPercentage(secondsLeft, type[timerMode])
  }

  const timeLeft = formatTimeLeft(secondsLeft)

  const { play, pause } = useSounds(volume)

  const handleClick = (event: MouseEvent) => {
    if (event.currentTarget.id === 'muteButton') return null

    if (timeLeft === '0:00') return null

    isActive ? pause() : play()

    setIsActive(!isActive)
    setButtonText(
      buttonText === 'START' || buttonText === 'RESUME' ? 'PAUSE' : 'RESUME',
    )
  }

  let timesUpMsg = timerMode === 'pomo' ? 'time for a break' : 'back to work!'

  let timeText = timeLeft === '0:00' ? timesUpMsg : timeLeft

  let textSize = timeLeft === '0:00' ? '12px' : '28px'

  return (
    <div className='timer' onClick={handleClick}>
      <div className='timer__display'>
        <CircularProgressbarWithChildren
          value={Percentage()}
          text={timeText}
          strokeWidth={4}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: 'var(--accent-color)',
            textColor: 'var(--text)',
            textSize: textSize,
            trailColor: 'none',
          })}
        >
          <MuteToggle />
          <button className='display__start-pause' onClick={handleClick}>
            {buttonText}
          </button>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  )
}

export default TimerDisplay
