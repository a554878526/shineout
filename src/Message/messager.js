import React from 'react'
import ReactDOM from 'react-dom'
import { messageClass } from './styles'
import Container from './Container'
import { getDefaultContainer } from '../config'

const elements = {}
const components = {}

function getElement(type) {
  const defaultContainer = getDefaultContainer()
  const div = document.createElement('div')
  div.className = messageClass('_', type)

  defaultContainer.appendChild(div)
  elements[type] = div
  return div
}

export function destroy(type) {
  if (elements[type]) {
    ReactDOM.unmountComponentAtNode(elements[type])
    const el = elements[type]
    if (el && el.parentNode) el.parentNode.removeChild(el)
    delete elements[type]
  }
  if (components[type]) {
    delete components[type]
  }
}

export function getComponent(type) {
  return new Promise(resolve => {
    const component = components[type]
    if (component) {
      resolve(component)
    } else {
      ReactDOM.render(
        <Container
          ref={comp => {
            components[type] = comp
            resolve(comp)
          }}
          onDestory={destroy.bind(null, type)}
        />,
        getElement(type)
      )
    }
  })
}
