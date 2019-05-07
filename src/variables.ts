interface Variables {
  api: string
}

export default ((): Variables => {
  const inProd = !!location.port

  return {
    api: inProd
      ? 'http://flashc.herokuapp.com/api'
      : `http://localhost:8000/api`,
  }
})()
