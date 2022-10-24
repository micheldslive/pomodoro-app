import useSound from 'use-sound'
import startSfx from '@/sounds/startTimer.mp3'
import pauseSfx from '@/sounds/pauseTimer.mp3'
import timesUpSfx from '@/sounds/timesUp.mp3'
import clickSfx from '@/sounds/slide.mp3'

const calcPercentage = (secondsLeft: number, length: number) => {
  return (secondsLeft / (length * 60)) * 100
}

const formatTimeLeft = (seconds: number) => {
  return `${Math.floor(seconds / 60)}:${
    seconds % 60 > 9 ? seconds % 60 : '0' + (seconds % 60)
  }`
}

const formatNumber = (EnvValue: string | undefined, defaultNumber: string) => {
  return parseInt(EnvValue || defaultNumber)
}

const useSounds = (volume: number) => {
  const [play] = useSound(startSfx, {
    interrupt: true,
    volume: volume,
  })
  const [pause] = useSound(pauseSfx, {
    interupt: true,
    volume: volume,
  })

  const [up] = useSound(timesUpSfx, {
    volume: volume,
  })

  const [click] = useSound(clickSfx, { volume: volume })

  return { play, pause, up, click }
}

export { calcPercentage, formatTimeLeft, formatNumber, useSounds }
