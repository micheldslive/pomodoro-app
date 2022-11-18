import create from 'zustand'

import { formatNumber } from '@/core/utils'
import { IStatesContext, IStatesDefaultValues } from '@/core/types'

const pomoLength = formatNumber(import.meta.env.VITE_POMO_LENGTH, 25)
const shortLength = formatNumber(import.meta.env.VITE_SHORT_LENGTH, 3)
const longLength = formatNumber(import.meta.env.VITE_LONG_LENGTH, 15)

const initialStates: IStatesContext = {
  settings: false,
  timerMode: 'pomo', // options: pomo, short, long
  pomoLength,
  shortLength,
  longLength,
  fontPref: 'kumbh', // options: kumbh, roboto, space
  accentColor: 'default', // options: default, blue, purple
  secondsLeft: pomoLength * 60,
  isActive: false,
  text: 'START',
  volume: true,
}

const useStore = create<IStatesDefaultValues>((set) => ({
  ...initialStates,
  setSettings: (settings: boolean) => set((state) => ({ ...state, settings })),
  setTimerMode: (timerMode: string) =>
    set((state) => ({ ...state, timerMode })),
  setPomoLength: (pomoLength: number) =>
    set((state) => ({ ...state, pomoLength })),
  setShortLength: (shortLength: number) =>
    set((state) => ({ ...state, shortLength })),
  setLongLength: (longLength: number) =>
    set((state) => ({ ...state, longLength })),
  setFontPref: (fontPref: string) => set((state) => ({ ...state, fontPref })),
  setAccentColor: (accentColor: string) =>
    set((state) => ({ ...state, accentColor })),
  setSecondsLeft: (secondsLeft: number) =>
    set((state) => ({ ...state, secondsLeft })),
  setIsActive: (isActive: boolean) => set((state) => ({ ...state, isActive })),
  setText: (text: string) => set((state) => ({ ...state, text })),
  setVolume: (volume: boolean) => set((state) => ({ ...state, volume })),
}))

export { useStore, initialStates }
