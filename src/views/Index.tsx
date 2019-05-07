import * as React from 'react'
import styled from 'styled-components'
import {} from "react-router-dom"

const Button = styled.button`
  display: block;
  color: aliceblue;
`

export class Index extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {}
  } 

  render() {
    return (
      <section className="main">
        <Button>Hello</Button>
      </section>
    )
  }
}
