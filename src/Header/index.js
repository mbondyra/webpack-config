import React from 'react'
import styled from 'styled-components'
import { colors, device } from '../variables'

const StyledHeader = styled.header`
  background-color: ${colors.darkgrey};
  height: 60px;
  padding: 20px;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  font-size: 25px;
`

const Ul = styled.ul`
  display: none;
  @media ${device.tablet} {
    display: inline;
  }
  li {
    display: inline;
    :hover {
      text-decoration: underline;
    }
    :not(:last-child):after {
      content: ' - ';
    }
  }
`

const Header = () => (
  <StyledHeader>
    <Logo>Example Skeleton</Logo>
    <nav>
      <Ul>
        <li>
          <a href=".">The company</a>
        </li>
        <li>
          <a href=".">How we work</a>
        </li>
        <li>
          <a href=".">Contact us</a>
        </li>
      </Ul>
    </nav>
  </StyledHeader>
)

export default Header
