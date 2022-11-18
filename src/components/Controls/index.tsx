import { IMapedNumbers, IStatesContext } from '@/core/types'
import { Controller, useForm } from 'react-hook-form'
import { useSounds } from '@/core/utils'
import { useStore } from '@/core/zustand'

const Controls = ({
  timerMode,
  pomoLength,
  shortLength,
  longLength,
  volume,
}: IStatesContext) => {
  const { setTimerMode, setSecondsLeft, setIsActive, setText } =
    useStore()

  const { click } = useSounds(Number(volume))

  const { control } = useForm()

  const handleModeChange = (mode: string) => {
    setTimerMode(mode)
    setIsActive(false)
    setText('START')
    click()

    const getSecondsLeft: IMapedNumbers = {
      pomo: pomoLength,
      short: shortLength,
      long: longLength,
    }

    setSecondsLeft(getSecondsLeft[mode] * 60)
  }

  return (
    <form className='controls'>
      <Controller
        control={control}
        name='mode'
        render={() => (
          <input
            type='radio'
            id='pomo'
            checked={timerMode === 'pomo'}
            onChange={({ currentTarget }) => handleModeChange(currentTarget.id)}
          />
        )}
      />
      <label htmlFor='pomo' className='controls__button'>
        pomodoro
      </label>

      <Controller
        control={control}
        name='mode'
        render={() => (
          <input
            type='radio'
            id='short'
            checked={timerMode === 'short'}
            onChange={({ currentTarget }) => handleModeChange(currentTarget.id)}
          />
        )}
      />
      <label htmlFor='short' className='controls__button'>
        short break
      </label>

      <Controller
        control={control}
        name='mode'
        render={() => (
          <input
            type='radio'
            id='long'
            checked={timerMode === 'long'}
            onChange={({ currentTarget }) => handleModeChange(currentTarget.id)}
          />
        )}
      />
      <label htmlFor='long' className='controls__button'>
        long break
      </label>
    </form>
  )
}

export default Controls
