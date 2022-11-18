import MuteToggle from '@/components/MuteToggle'
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { IMapedNumbers, IStatesContext } from '@/core/types'
import { calcPercentage, formatTimeLeft, useSounds } from '@/core/utils'
import { MouseEvent } from 'react'
import { useStore } from '@/core/zustand'

const TimerDisplay = ({
  timerMode,
  pomoLength,
  shortLength,
  longLength,
  secondsLeft,
  isActive,
  text,
  volume,
}: IStatesContext) => {
  const { setIsActive, setText } = useStore()

  const Percentage = () => {
    const type: IMapedNumbers = {
      pomo: pomoLength,
      short: shortLength,
      long: longLength,
    }

    return calcPercentage(secondsLeft, type[timerMode])
  }

  const timeLeft = formatTimeLeft(secondsLeft)

  const { play, pause } = useSounds(Number(volume))

  const handleClick = (event: MouseEvent) => {
    if (event.currentTarget.id === 'muteButton') return null

    if (timeLeft === '0:00') return null

    isActive ? pause() : play()

    setIsActive(!isActive)
    setText(
      text === 'START' || text === 'RESUME' ? 'PAUSE' : 'RESUME',
    )
  }

  let timesUpMsg = timerMode === 'pomo' ? 'time for a break' : 'back to work!'

  let timeText = timeLeft === '0:00' ? timesUpMsg : timeLeft

  let textSize = timeLeft === '0:00' ? '12px' : '28px'

  return (
    <div className='timer' onClick={handleClick}>
      <div className='timer__display'>
        <CircularProgressbarWithChildren
          className='timer__display__circular'
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
          <MuteToggle volume={volume} />
          <button className='timer__display__start-pause' onClick={handleClick}>
            {text}
          </button>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  )
}

export default TimerDisplay
