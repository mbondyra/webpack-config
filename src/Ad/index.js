import React from 'react'
import PropTypes from 'prop-types'
import Label from '../design-system/Label'
import Image from '../design-system/Image'
import Button from '../design-system/Button'

const Ad = ({ currencySymbol, pricePerMonth, photoUrls, title }) => (
  <article>
    <Image src={photoUrls.homecardHidpi} />
    <h1>{title}</h1>
    <Label currency={currencySymbol}>{pricePerMonth}</Label>
    <Button>More details</Button>
    <Button type="SECONDARY">Book now</Button>
  </article>
)

Ad.propTypes = {
  currencySymbol: PropTypes.string,
  pricePerMonth: PropTypes.string,
  photoUrls: PropTypes.object,
  title: PropTypes.string
}

export default Ad
