import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 140px;
  height: 105px;
  transition: box-shadow 0.4s;
  :hover {
    box-shadow: 10px 10px 22px -3px rgba(122, 122, 122, 1);
  }
`

const Image = ({ src }) => <StyledImage src={src} />

Image.propTypes = {
  src: PropTypes.string.isRequired
}

export default Image
