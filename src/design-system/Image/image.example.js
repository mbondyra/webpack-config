import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Image from '.'

const stories = storiesOf('Storybook Knobs', module)
stories.addDecorator(withKnobs)

stories.add('with a image', () => (
  <Image src={text('src', 'http://placekitten.com/200/300')} />
))
