import React from 'react'
import ReactDOM from 'react-dom'

import 'semantic-styles'

import './index.css' // Package

import {
  Accordion,
  AlertDialog,
  Combobox,
  Dialog,
  MenuButton,
  Slider,
  Tabs,
  Tooltip,
} from './reach-ui-components'

function Page() {
  return (
    <div className="page padding container">
      <a className="nav-link" href="/">
        <h1
          className="title"
          style={{
            marginBlockStart: `var(--space-xl)`,
            marginBlockEnd: `var(--space-md)`,
          }}
        >
          Semantic Styles X Reach UI
        </h1>
      </a>
      <hr className="hr" />
      <h2>Accordion</h2>
      <Accordion />
      <hr className="hr" />
      <h2>Dialog</h2>
      <Dialog />
      <hr className="hr" />
      <h2>Alert Dialog</h2>
      <AlertDialog />
      <hr className="hr" />
      <h2>Combobox</h2>
      <Combobox />
      <hr className="hr" />
      <h2>Menu Button</h2>
      <MenuButton />
      <hr className="hr" />
      <h2>Slider</h2>
      <Slider />
      <hr className="hr" />
      <h2>Tabs</h2>
      <Tabs />
      <hr className="hr" />
      <h2>Tooltip</h2>
      <Tooltip />
      <hr className="hr" />
      <a href="/" className="nav-link">
        <h3
          className="title"
          style={{
            marginBlockStart: `var(--space-xl)`,
            marginBlockEnd: `var(--space-xl)`,
          }}
        >
          Semantic Styles X Reach UI
        </h3>
      </a>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('root'))
