import { ComponentMeta, ComponentStory } from '@storybook/react'
import TimeDisplayComponent from '.'
import { initialStates } from '@/core/zustand'
import { IStatesContext } from '@/core/types'

const disable = {
  table: { disable: true },
}

export default {
  title: 'Time Display',
  component: TimeDisplayComponent,
  argTypes: {
    settings: disable,
    timerMode: disable,
    pomoLength: disable,
    longLength: disable,
    shortLength: disable,
    isActive: disable,
    accentColor: disable,
    fontPref: disable,
  },
} as ComponentMeta<typeof TimeDisplayComponent>

const Template: ComponentStory<typeof TimeDisplayComponent> = (
  args: IStatesContext,
) => {
  return <TimeDisplayComponent {...args} />
}

export const Display = Template.bind({})

Display.args = initialStates
