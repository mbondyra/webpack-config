import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs'
import Button from '.'

const stories = storiesOf('Storybook Knobs', module)
stories.addDecorator(withKnobs)

stories.add('with a button', () => (
  <Button
    type={select('type', ['PRIMARY', 'SECONDARY'], 'PRIMARY')}
    onClick={() => action('clicked')}
  >
    {text('Label', 'More details')}
  </Button>
))
