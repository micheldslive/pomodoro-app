import { ComponentMeta, ComponentStory } from '@storybook/react'

import MuteToggleComponent from '.'

export default {
  title: 'Mute',
  component: MuteToggleComponent,
} as ComponentMeta<typeof MuteToggleComponent>

const Template: ComponentStory<typeof MuteToggleComponent> = (args) => (
  <MuteToggleComponent {...args} />
)

export const MuteButton = Template.bind({})

MuteButton.args = {
  volume: true,
}
