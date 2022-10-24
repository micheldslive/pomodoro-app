interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <header>
      <h1 className='pomodoro-app__title'>{title}</h1>
    </header>
  )
}

export default Header
