import React, { useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../variables'
import Ad from '../Ad'

const Main = styled.main`
  background: ${colors.grey};
`

const example = {
  adId: 121420,
  currencySymbol: '€',
  pricePerMonth: 320,
  photoUrls: {
    homecardHidpi:
      'https://sah-staging-photos-resized.s3-eu-west-1.amazonaws.com/pt_640_480/c4ab919c63db9324caece4152e035d72d87f749a7569e80276a42655.jpg'
  },
  title: 'Light room in shared apartment in Puerta del Ángel, Madrid'
}

const Listing = () => {
  useEffect(() => {
    // run api call
    // console.log('hola')
  }, [])
  return (
    <Main>
      <Ad {...example} />
    </Main>
  )
}

export default Listing
