import React from 'react'
import styled from 'styled-components'
import { colors } from '../variables'
import Ad from '../Ad'
import { useDataApi } from '../transport'

const Main = styled.main`
  background: ${colors.grey};
  padding: 10px;
  min-height: calc(100vh - 60px);
`

const Listing = () => {
  const [{ data, isError, isLoading }] = useDataApi('example', [])
  return (
    <Main>
      {isLoading && (
        <div>Data is loading - This will be a fancy loader one day...</div>
      )}
      {isError && <div>Something is wrong. Please refresh the page.</div>}
      {data && data.map(example => <Ad key={example.id} {...example} />)}
    </Main>
  )
}

export default Listing
