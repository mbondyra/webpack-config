import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../variables'

const StyledLabel = styled.div`
  display: inline-block;
  padding: 0 12px;
  height: 34px;
  line-height: 36px;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  color: ${colors.yellow};
  border-radius: 14px;
  background: ${colors.darkgrey};
`

const Label = ({ children, currency = 'hello' }) => (
  <StyledLabel>
    {children}
    <span>{currency}</span>
  </StyledLabel>
)

Label.propTypes = {
  children: PropTypes.node,
  currency: PropTypes.string
}

Label.defaultProps = {
  currency: '€'
}

export default Label
