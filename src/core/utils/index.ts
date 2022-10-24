const calcPercentage = (secondsLeft: number, length: number) => {
  return (secondsLeft / (length * 60)) * 100
}

const formatTimeLeft = (seconds: number) => {
  return `${Math.floor(seconds / 60)}:${
    seconds % 60 > 9 ? seconds % 60 : '0' + (seconds % 60)
  }`
}

export { calcPercentage, formatTimeLeft }
