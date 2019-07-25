import React from 'react'
import styled from 'styled-components'
import { colors } from '../variables'

const StyledHeader = styled.header`
  background-color: ${colors.grey};
`

const Logo = styled.div``

const Ul = styled.ul`
  li {
    display: inline;
  }
`

const Header = () => (
  <StyledHeader>
    <Logo>Spotaroom</Logo>
    <nav>
      <Ul>
        <li>The company</li>
        <li>How we work</li>
        <li>Contact us</li>
      </Ul>
    </nav>
  </StyledHeader>
)

export default Header
