import { ComponentMeta, ComponentStory } from '@storybook/react'

import HeaderComponent from '.'

export default {
  title: 'Header',
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>

const Template: ComponentStory<typeof HeaderComponent> = (args) => (
  <div className='default--storybook no-p'>
    <HeaderComponent {...args} />
  </div>
)

export const Logo = Template.bind({})

Logo.args = {
  text: 'Pomodoro',
}
