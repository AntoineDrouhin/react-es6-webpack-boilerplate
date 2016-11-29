import React from 'react'
import { render } from 'react-dom'


const name = 'Anis'
const helloWorld = <h1>Hello {name}</h1>

render(
  helloWorld ,
  document.getElementById('root')
)
