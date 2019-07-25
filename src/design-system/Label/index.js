import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../variables'

const StyledLabel = styled.span`
  padding: 0 16px;
  height: 40px;
  line-height: 40px;
  font-size: 24px;
  font-weight: 700;
  white-space: nowrap;
  color: ${colors.yellow};
  border-radius: 8px;
  background: ${colors.darkgrey};
`

const Currency = styled.span`
  font-size: 0.8em;
`

const Label = ({ children, currency = 'hello' }) => (
  <StyledLabel>
    {children}
    <Currency>{currency}</Currency>
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
