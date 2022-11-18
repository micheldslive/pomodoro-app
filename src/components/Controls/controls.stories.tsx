import { ComponentMeta, ComponentStory } from '@storybook/react'
import ControlsComponent from '.'
import { initialStates } from '@/core/zustand'
import { IStatesContext } from '@/core/types'

const disable = {
  table: { disable: true },
}

export default {
  title: 'Controls',
  component: ControlsComponent,
  argTypes: {
    settings: disable,
    pomoLength: disable,
    longLength: disable,
    shortLength: disable,
    isActive: disable,
    accentColor: disable,
    fontPref: disable,
    text: disable,
    secondsLeft: disable,
    volume: disable,
    timerMode: {
      defaultValue: 'pomo',
      control: { type: 'inline-radio', options: ['pomo', 'short', 'long'] },
    },
  },
} as ComponentMeta<typeof ControlsComponent>

const Template: ComponentStory<typeof ControlsComponent> = (
  args: IStatesContext,
) => {
  return <ControlsComponent {...args} />
}

export const ControlButtons = Template.bind({})

ControlButtons.args = initialStates
