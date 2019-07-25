import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Label from '.'

const stories = storiesOf('Storybook Knobs', module)
stories.addDecorator(withKnobs)

stories.add('with a label', () => (
  <Label currency={text('currency', '€')}>{text('Label', '650')}</Label>
))
