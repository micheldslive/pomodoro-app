import React from 'react'
export interface IChildren {
  children: React.ReactNode
}
export interface IStatesContext {
  settings: boolean
  timerMode: string
  pomoLength: number
  shortLength: number
  longLength: number
  fontPref: string
  accentColor: string
  secondsLeft: number
  isActive: boolean
  text: string
  volume: boolean
}
export interface IStatesDefaultValues extends IStatesContext {
  setSettings(settings: boolean): void
  setTimerMode(timerMode: string): void
  setPomoLength(pomoLength: number): void
  setShortLength(shortLength: number): void
  setLongLength(longLength: number): void
  setFontPref(fontPref: string): void
  setAccentColor(accentColor: string): void
  setSecondsLeft(secondsLeft: number): void
  setIsActive(isActive: boolean): void
  setText(text: string): void
  setVolume(volume: boolean): void
}

export type TActionStatesContext =
  | { type: 'settings'; settings: boolean }
  | { type: 'timerMode'; timerMode: string }
  | { type: 'pomoLength'; pomoLength: number }
  | { type: 'shortLength'; shortLength: number }
  | { type: 'longLength'; longLength: number }
  | { type: 'fontPref'; fontPref: string }
  | { type: 'accentColor'; accentColor: string }
  | { type: 'secondsLeft'; secondsLeft: number }
  | { type: 'isActive'; isActive: boolean }
  | { type: 'text'; text: string }
  | { type: 'volume'; volume: number }

export interface IMapedNumbers {
  [key: string]: number
}

export interface IMapedStrings {
  [key: string]: string
}

export interface ISettingsForm {
  pomodoro: number
  shortBreak: number
  longBreak: number
  font: string
  color: string
}

export interface IHeader {
  text?: string
}

export interface IButtons extends IHeader {
  type?: string
}
