import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from '.'
import { colors } from '../../variables'

describe('components/Button', () => {
  it('renders with given copy', () => {
    const wrapper = mount(<Button>Copy</Button>)
    expect(wrapper.text()).toBe('Copy')
  })

  it('Sets proper background colors to secondary button', () => {
    const wrapper = mount(<Button type="SECONDARY">Creating...</Button>)
    const element = wrapper.find('button')
    expect(element).toHaveStyleRule('background', colors.yellow)
  })

  it('calls onClick correctly', () => {
    const clickSpy = jest.fn()
    const wrapper = shallow(<Button onClick={clickSpy} />)
    wrapper.simulate('click')
    expect(clickSpy).toHaveBeenCalledTimes(1)
  })
})
