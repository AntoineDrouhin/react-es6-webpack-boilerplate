import React from 'react'
import HelloWorld from './HelloWorld'
import { render } from 'react-dom'
import { Button } from 'react-bootstrap/lib/Button';

const textButton = 'Click ME'

render(
  <HelloWorld name="ANis" />,
  document.getElementById('root')
)
