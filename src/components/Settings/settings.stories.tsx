import { ComponentMeta, ComponentStory } from '@storybook/react'
import SettingsComponent from '.'
import { initialStates } from '@/core/zustand'

const disable = {
  table: { disable: true },
}

export default {
  title: 'Settings',
  component: SettingsComponent,
  argTypes: {
    timerMode: disable,
    secondsLeft: disable,
    isActive: disable,
    text: disable,
    volume: disable,
    fontPref: {
      value: 'kumbh',
      control: { type: 'select', labels: ['kumbh', 'roboto', 'space'] },
    },
    accentColor: {
      value: 'default',
      control: { type: 'select', labels: ['default', 'blue', 'purple'] },
    },
  },
} as ComponentMeta<typeof SettingsComponent>

const Template: ComponentStory<typeof SettingsComponent> = (args) => (
  <SettingsComponent {...args} />
)

export const ModalSettings = Template.bind({})

ModalSettings.args = { ...initialStates, settings: true }
