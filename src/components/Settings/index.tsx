import { useStatesContext } from '@/core/context'
import { IMapedNumbers, IMapedStrings, ISettingsForm } from '@/core/types'
import { Button } from '@/components/Button'
import { SubmitHandler, useForm } from 'react-hook-form'

const Settings = ({ visibleTest }: { visibleTest?: boolean }) => {
  const {
    settingsVisible,
    setSettingsVisible,
    pomoLength,
    setPomoLength,
    shortLength,
    setShortLength,
    longLength,
    setLongLength,
    fontPref,
    setFontPref,
    accentColor,
    setAccentColor,
    setSecondsLeft,
    timerMode,
  } = useStatesContext()

  const colors: IMapedStrings = {
    default: '#F87070',
    blue: '#70F3F8',
    purple: '#D881F8',
  }

  const fonts: IMapedStrings = {
    kumbh: `'Kumbh Sans', sans-serif`,
    roboto: `'Roboto Slab', serif`,
    space: `'Space Mono', monospace`,
  }

  const styles = document.documentElement.style

  const { handleSubmit, register } = useForm<ISettingsForm>()

  const applySettings: SubmitHandler<ISettingsForm> = ({
    color,
    font,
    longBreak,
    pomodoro,
    shortBreak,
  }) => {
    setPomoLength(pomodoro)
    setShortLength(shortBreak)
    setLongLength(longBreak)
    setFontPref(font)
    setAccentColor(color)
    setSettingsVisible(false)

    styles.setProperty('--font-current', fonts[font])
    styles.setProperty('--accent-color', colors[color])

    const getSecondsLeft: IMapedNumbers = {
      pomo: pomoLength,
      short: shortLength,
      long: longLength,
    }

    setSecondsLeft(getSecondsLeft[timerMode] * 60)
  }

  if (settingsVisible || visibleTest) {
    return (
      <div className='preferences preferences--visible'>
        <div className='preferences__pane'>
          <Button type='close' buttonText='×' />
          <h2>Settings</h2>
          <form onSubmit={handleSubmit(applySettings)}>
            <div className='pane__time-settings'>
              <h3>Time (Minutes)</h3>
              <div className='time-settings__form'>
                <label htmlFor='pomodoro'>pomodoro</label>
                <input
                  type='number'
                  id='pomodoro'
                  min='5'
                  max='90'
                  defaultValue={pomoLength}
                  {...register('pomodoro')}
                />
                <label htmlFor='short-break'>short break</label>
                <input
                  type='number'
                  id='short-break'
                  min='1'
                  max='14'
                  defaultValue={shortLength}
                  {...register('shortBreak')}
                />
                <label htmlFor='long-break'>long break</label>
                <input
                  type='number'
                  id='long-break'
                  min='15'
                  max='30'
                  defaultValue={longLength}
                  {...register('longBreak')}
                />
              </div>
            </div>

            <div className='pane__font-preference'>
              <h3>Font</h3>
              <input
                type='radio'
                id='fontPref1'
                value='kumbh'
                defaultChecked={fontPref === 'kumbh'}
                {...register('font')}
              />
              <label htmlFor='fontPref1' className='font-preference__kumbh'>
                Aa
              </label>
              <input
                type='radio'
                id='fontPref2'
                value='roboto'
                defaultChecked={fontPref === 'roboto'}
                {...register('font')}
              />
              <label htmlFor='fontPref2' className='font-preference__roboto'>
                Aa
              </label>
              <input
                type='radio'
                id='fontPref3'
                value='space'
                defaultChecked={fontPref === 'space'}
                {...register('font')}
              />
              <label htmlFor='fontPref3' className='font-preference__space'>
                Aa
              </label>
            </div>

            <div className='pane__color-preference'>
              <h3>Color</h3>
              <input
                type='radio'
                id='colorPref1'
                value='default'
                defaultChecked={accentColor === 'default'}
                {...register('color')}
              />
              <label
                htmlFor='colorPref1'
                className='color-preference__default'
              ></label>

              <input
                type='radio'
                id='colorPref2'
                value='blue'
                defaultChecked={accentColor === 'blue'}
                {...register('color')}
              />
              <label
                htmlFor='colorPref2'
                className='color-preference__blue'
              ></label>

              <input
                type='radio'
                id='colorPref3'
                value='purple'
                defaultChecked={accentColor === 'purple'}
                {...register('color')}
              />
              <label
                htmlFor='colorPref3'
                className='color-preference__purple'
              ></label>
            </div>
            <Button type='apply' buttonText='Apply' />
          </form>
        </div>
      </div>
    )
  }

  return null
}

export default Settings
