import { useStatesContext } from '@/core/context'
import { ISettingsForm } from '@/core/types'
import { Button } from '@/components/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import classNames from 'classnames'
import { Theme, useSounds } from '@/core/utils'

const Settings = () => {
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
    volume,
  } = useStatesContext()

  const styles = document.documentElement.style

  const { handleSubmit, register } = useForm<ISettingsForm>()
  const { colors, fonts } = Theme()
  const { play } = useSounds(volume)

  const applySettings: SubmitHandler<ISettingsForm> = ({
    color,
    font,
    longBreak,
    pomodoro,
    shortBreak,
  }) => {
    styles.setProperty('--font-current', fonts[font])
    styles.setProperty('--accent-color', colors[color])

    pomoLength != pomodoro && setPomoLength(pomodoro)
    shortLength != shortBreak && setShortLength(shortBreak)
    longLength != longBreak && setLongLength(longBreak)
    setFontPref(font)
    setAccentColor(color)
    handleCloseSettings()
    play()
  }

  const handleCloseSettings = () => {
    setSettingsVisible(false)
  }

  return (
    <div
      className={classNames(
        'preferences',
        settingsVisible && 'preferences-visible',
      )}
    >
      <div className='preferences__pane'>
        <div
          className='preferences__pane__overlay'
          onClick={handleCloseSettings}
        ></div>
        <div className='preferences__pane__title'>
          <h2>Settings</h2>
          <Button type='close' buttonText='×' />
        </div>
        <form onSubmit={handleSubmit(applySettings)}>
          <div className='preferences__pane__time-settings'>
            <h3>Time (Minutes)</h3>
            <div className='preferences__pane__time-settings__form'>
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

          <div className='preferences__pane__font-preference'>
            <h3>Font</h3>
            <input
              type='radio'
              id='fontPref1'
              value='kumbh'
              defaultChecked={fontPref === 'kumbh'}
              {...register('font')}
            />
            <label
              htmlFor='fontPref1'
              className='preferences__pane__font-preference__kumbh'
            >
              Aa
            </label>
            <input
              type='radio'
              id='fontPref2'
              value='roboto'
              defaultChecked={fontPref === 'roboto'}
              {...register('font')}
            />
            <label
              htmlFor='fontPref2'
              className='preferences__pane__font-preference__roboto'
            >
              Aa
            </label>
            <input
              type='radio'
              id='fontPref3'
              value='space'
              defaultChecked={fontPref === 'space'}
              {...register('font')}
            />
            <label
              htmlFor='fontPref3'
              className='preferences__pane__font-preference__space'
            >
              Aa
            </label>
          </div>

          <div className='preferences__pane__color-preference'>
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
              className='preferences__pane__color-preference__default'
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
              className='preferences__pane__color-preference__blue'
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
              className='preferences__pane__color-preference__purple'
            ></label>
          </div>
          <Button type='apply' buttonText='Apply' />
        </form>
      </div>
    </div>
  )
}

export default Settings
