import { ISettingsForm, IStatesContext } from '@/core/types'
import { Button } from '@/components/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import classNames from 'classnames'
import { Theme, useSounds } from '@/core/utils'
import { useStore } from '@/core/zustand'

const Settings = ({
  settings,
  pomoLength,
  shortLength,
  longLength,
  fontPref,
  accentColor,
  volume,
}: IStatesContext) => {
  const {
    setSettings,
    setPomoLength,
    setShortLength,
    setLongLength,
    setFontPref,
    setAccentColor,
  } = useStore()

  const styles = document.documentElement.style

  const { handleSubmit, register } = useForm<ISettingsForm>()
  const { colors, fonts } = Theme()
  const { play } = useSounds(Number(volume))

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
    setSettings(false)
  }

  return (
    <div
      className={classNames('preferences', settings && 'preferences-visible')}
    >
      <div className='preferences__pane'>
        <div
          className='preferences__pane__overlay'
          onClick={handleCloseSettings}
        ></div>
        <div className='preferences__pane__title'>
          <h2>Settings</h2>
          <Button type='close' text='×' />
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
                value={pomoLength}
                {...register('pomodoro', {
                  onChange: ({ currentTarget }) => setPomoLength(currentTarget.value)
                })}
              />
              <label htmlFor='short-break'>short break</label>
              <input
                type='number'
                id='short-break'
                min='1'
                max='14'
                value={shortLength}
                {...register('shortBreak', {
                  onChange: ({ currentTarget }) => setShortLength(currentTarget.value)
                })}
              />
              <label htmlFor='long-break'>long break</label>
              <input
                type='number'
                id='long-break'
                min='15'
                max='30'
                value={longLength}
                {...register('longBreak', {
                  onChange: ({ currentTarget }) => setLongLength(currentTarget.value)
                })}
              />
            </div>
          </div>

          <div className='preferences__pane__font-preference'>
            <h3>Font</h3>
            <input
              type='radio'
              id='fontPref1'
              value='kumbh'
              checked={fontPref === 'kumbh'}
              {...register('font', {
                onChange: ({ currentTarget }) => setFontPref(currentTarget.value)
              })}
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
              checked={fontPref === 'roboto'}
              {...register('font', {
                onChange: ({ currentTarget }) => setFontPref(currentTarget.value)
              })}
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
              checked={fontPref === 'space'}
              {...register('font', {
                onChange: ({ currentTarget }) => setFontPref(currentTarget.value)
              })}
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
              checked={accentColor === 'default'}
              {...register('color', {
                onChange: ({ currentTarget }) => setAccentColor(currentTarget.value)
              })}
            />
            <label
              htmlFor='colorPref1'
              className='preferences__pane__color-preference__default'
            ></label>

            <input
              type='radio'
              id='colorPref2'
              value='blue'
              checked={accentColor === 'blue'}
              {...register('color', {
                onChange: ({ currentTarget }) => setAccentColor(currentTarget.value)
              })}
            />
            <label
              htmlFor='colorPref2'
              className='preferences__pane__color-preference__blue'
            ></label>

            <input
              type='radio'
              id='colorPref3'
              value='purple'
              checked={accentColor === 'purple'}
              {...register('color', {
                onChange: ({ currentTarget }) => setAccentColor(currentTarget.value)
              })}
            />
            <label
              htmlFor='colorPref3'
              className='preferences__pane__color-preference__purple'
            ></label>
          </div>
          <Button type='apply' text='Apply' />
        </form>
      </div>
    </div>
  )
}

export default Settings
