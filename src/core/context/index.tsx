import { createContext, useContext, useReducer } from 'react'
import {
  IChildren,
  IStatesContext,
  IStatesDefaultValues,
  TActionStatesContext,
} from '@/core/types'

const pomoLength = 25

const initialStates: IStatesContext = {
  settingsVisible: false,
  timerMode: 'pomo', // options: pomo, short, long
  pomoLength,
  shortLength: 3,
  longLength: 15,
  fontPref: 'kumbh', // options: kumbh, roboto, space
  accentColor: 'default', // options: default, blue, purple
  secondsLeft: pomoLength * 60,
  isActive: false,
  buttonText: 'START',
  volume: 1,
}

const contextStates = {} as IStatesDefaultValues

const StatesContext = createContext(contextStates)

const useStatesContext = () => useContext(StatesContext)

const reducer = (state: IStatesContext, action: TActionStatesContext) => {
  switch (action.type) {
    case 'settingsVisible':
      return { ...state, settingsVisible: action.settingsVisible }
    case 'timerMode':
      return { ...state, timerMode: action.timerMode }
    case 'pomoLength':
      return { ...state, pomoLength: action.pomoLength }
    case 'shortLength':
      return { ...state, shortLength: action.shortLength }
    case 'longLength':
      return { ...state, longLength: action.longLength }
    case 'fontPref':
      return { ...state, fontPref: action.fontPref }
    case 'accentColor':
      return { ...state, accentColor: action.accentColor }
    case 'secondsLeft':
      return { ...state, secondsLeft: action.secondsLeft }
    case 'isActive':
      return { ...state, isActive: action.isActive }
    case 'buttonText':
      return { ...state, buttonText: action.buttonText }
    case 'volume':
      return { ...state, volume: action.volume }
    default:
      return state
  }
}

const StatesProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(reducer, initialStates)

  // STATES SETTERS
  const setSettingsVisible = (settingsVisible: boolean) => {
    dispatch({ type: 'settingsVisible', settingsVisible })
  }

  const setTimerMode = (timerMode: string) => {
    dispatch({ type: 'timerMode', timerMode })
  }

  const setPomoLength = (pomoLength: number) => {
    dispatch({ type: 'pomoLength', pomoLength })
  }
  const setShortLength = (shortLength: number) => {
    dispatch({ type: 'shortLength', shortLength })
  }
  const setLongLength = (longLength: number) => {
    dispatch({ type: 'longLength', longLength })
  }
  const setFontPref = (fontPref: string) => {
    dispatch({ type: 'fontPref', fontPref })
  }
  const setAccentColor = (accentColor: string) => {
    dispatch({ type: 'accentColor', accentColor })
  }
  const setSecondsLeft = (secondsLeft: number) => {
    dispatch({ type: 'secondsLeft', secondsLeft })
  }
  const setIsActive = (isActive: boolean) => {
    dispatch({ type: 'isActive', isActive })
  }
  const setButtonText = (buttonText: string) => {
    dispatch({ type: 'buttonText', buttonText })
  }
  const setVolume = (volume: number) => {
    dispatch({ type: 'volume', volume })
  }

  return (
    <StatesContext.Provider
      value={{
        ...state,
        setSettingsVisible,
        setTimerMode,
        setPomoLength,
        setShortLength,
        setLongLength,
        setFontPref,
        setAccentColor,
        setSecondsLeft,
        setIsActive,
        setButtonText,
        setVolume,
      }}
    >
      {children}
    </StatesContext.Provider>
  )
}

export { StatesProvider, useStatesContext }
