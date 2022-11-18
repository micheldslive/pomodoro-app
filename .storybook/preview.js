export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

import '../src/styles/main.scss'

export const decorators = [
  (Story) => (
    <div className='pomodoro-app'>
      <Story />
    </div>
  ),
];
