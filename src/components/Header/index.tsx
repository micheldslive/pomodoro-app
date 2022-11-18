import { IHeader } from "@/core/types"

const Header = ({ text }: IHeader) => {
  return (
    <header>
      <h1 className='pomodoro-app__title'>{text}</h1>
    </header>
  )
}

export default Header
