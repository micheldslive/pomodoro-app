import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Button } from '.'

export default {
  title: 'Buttons',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  const closeBackground = { padding: 10, background: 'white', borderRadius: 10 }

  return (
    <div style={args.type === 'close' ? closeBackground : {}}>
      <Button {...args} />
    </div>
  )
}

export const Settings = Template.bind({})
export const Close = Template.bind({})
export const Apply = Template.bind({})

Settings.args = {
  type: 'settings',
}

Close.args = {
  type: 'close',
  text: '×',
}

Apply.args = {
  type: 'apply',
  text: 'Enviar',
}
