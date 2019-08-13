const request = require('async-request')

const URL = `https://jsonplaceholder.typicode.com/`

const headers = {
  'Access-Control-Allow-Origin': '*', //change to safer
  'Access-Control-Allow-Headers': 'Content-Type'
}

const getObjects = async () => {
  const markersResponse = await request(URL + `photos`)
  return JSON.parse(markersResponse.body).slice(0, 30)
}

exports.handler = async () => {
  try {
    const examples = await getObjects()

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(examples)
    }
  } catch {
    return {
      statusCode: 500,
      headers,
      body: 'Error with getting the data.'
    }
  }
}
