import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../variables'

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  height: 60px;
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  white-space: nowrap;
  color: ${colors.white};
  border: 0;
  border-bottom-width: 10px;
  border-bottom-style: solid;
  ${props =>
    props.type === 'PRIMARY' &&
    `
    background: ${colors.green};
    border-bottom-color: ${colors.darkgreen};
  `}
  ${props =>
    props.type === 'SECONDARY' &&
    `
    background: ${colors.yellow};
    border-bottom-color: ${colors.orange};
  `}
  cursor: pointer;
  transition: filter 0.4s;

  &:hover {
    filter: saturate(1.5);
  }

  &:focus {
    filter: saturate(1.5);
  }
`

const Button = ({ children, type, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'PRIMARY'
}

export default Button
