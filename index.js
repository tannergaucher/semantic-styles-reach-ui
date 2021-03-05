import React from 'react'
import ReactDOM from 'react-dom'

import 'semantic-styles'
// Package
import './index.css'

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
  // import tokens
  // set tokens values from  json || query params
  return (
    <div className="page padding container">
      <h1 className="title" style={{ marginBlockStart: `var(--space-xl)` }}>
        Semantic Styles X Reach UI
      </h1>
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
      <h2>Slider </h2>
      <Slider />
      <hr className="hr" />
      <h2>Tabs</h2>
      <Tabs />
      <hr className="hr" />
      <h2>Tooltip</h2>
      <Tooltip />
      <hr className="hr" />
      <h3
        className="title"
        style={{
          marginBlockStart: `var(--space-xl)`,
          marginBlockEnd: `var(--space-xl)`,
        }}
      >
        Semantic Styles X Reach UI
      </h3>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById('root'))
