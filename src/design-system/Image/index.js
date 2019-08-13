import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 100%;
  cursor: pointer;
  transition: box-shadow 0.4s;
  :hover {
    box-shadow: 10px 10px 22px -3px rgba(122, 122, 122, 1);
  }
`

const Image = ({ src, alt }) => <StyledImage src={src} alt={alt} />

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
}

Image.defaultProps = {
  alt: 'room-piture'
}

export default Image
