import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import Image from '.'

const stories = storiesOf('Storybook Knobs', module)
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{ width: '100px', margin: 'auto' }}>{story()}</div>
  ))

stories.add('with a image', () => (
  <Image src={text('src', 'http://placekitten.com/200/300')} />
))
