import { MuteToggle } from '@/components/MuteToggle'
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import useSound from 'use-sound'
import startSfx from '@/sounds/startTimer.mp3'
import pauseSfx from '@/sounds/pauseTimer.mp3'
import { useStatesContext } from '@/core/context'
import { IMapedNumbers } from '@/core/types'
import { calcPercentage, formatTimeLeft } from '@/core/utils'
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

  const [play] = useSound(startSfx, {
    interrupt: true,
    volume: volume,
  })
  const [pause] = useSound(pauseSfx, {
    interupt: true,
    volume: volume,
  })

  const handleClick = (event: MouseEvent) => {
    if (event.currentTarget.id === 'muteButton') {
      return null
    }

    if (timeLeft === '0:00') {
      return null
    }

    if (isActive) {
      pause()
    } else {
      play()
    }
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
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,
            // Colors & Fonts
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
