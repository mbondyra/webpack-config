import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Label from '../design-system/Label'
import Image from '../design-system/Image'
import Button from '../design-system/Button'
import { colors, device } from '../variables'

const Article = styled.article`
  background-color: ${colors.lightgrey};
  color: ${colors.darkgrey};
  margin-bottom: 10px;
  padding: 16px;
  @media ${device.tablet} {
    display: grid;
    grid-gap: 16px;
    row-gap: 16px;
    grid-template-columns: 140px 1fr;
    align-content: space-around;
    justify-content: space-between;
    > :nth-child(1) {
      grid-column: 1;
      grid-row: 1 / 3;
    }
    > :nth-child(2) {
      grid-column: 2;
      grid-row: 1;
    }
    > :nth-child(3) {
      grid-column: 3;
      grid-row: 1;
    }
    > :nth-child(4) {
      grid-column: 2 / 4;
      grid-row: 2;
    }
  }
`

const MoreDetails = styled.a`
  display: none;
  @media ${device.tablet} {
    display: inline-block;
    margin-right: 20px;
  }
`

const LabelContainer = styled.div`
  text-align: right;
  margin: 0px 0 16px;
`

const ButtonsContainer = styled.div`
  text-align: right;
`

const Book = styled.a`
  @media ${device.tablet} {
    display: inline-block;
  }
`
const H1 = styled.h1`
  font-size: 20px;
  margin: 10px 0;
`

const Ad = ({ thumbnailUrl, title, albumId, id }) => (
  <Article>
    <Image src={thumbnailUrl} />
    <H1>{title}</H1>
    <LabelContainer>
      <Label currency={albumId}>{id} - </Label>
    </LabelContainer>
    <ButtonsContainer>
      <MoreDetails href="#">
        <Button>More details</Button>
      </MoreDetails>
      <Book href="#">
        <Button type="SECONDARY">See more</Button>
      </Book>
    </ButtonsContainer>
  </Article>
)

Ad.propTypes = {
  thumbnailUrl: PropTypes.string,
  title: PropTypes.string,
  albumId: PropTypes.string,
  id: PropTypes.string
}

export default Ad
