import { useEffect, useState } from 'react'

const URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:9000/.netlify/functions/'
    : '.netlify/functions/'

export const useDataApi = (endpoint, initialData) => {
  const [data, setData] = useState(initialData)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const result = await fetch(URL + endpoint).then(res => res.json())
        setData(result)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [])

  return [{ data, isLoading, isError }]
}
