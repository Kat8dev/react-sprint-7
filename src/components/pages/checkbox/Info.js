import React from 'react'
import { MODAL_STYLES, OVERLAY_STYLES, BUTTON_STYLES } from '../../../styled'

export default function Modal({ open, children, onClose }) {
  if (!open) return null

  return (

    <OVERLAY_STYLES>
      <MODAL_STYLES>
        <BUTTON_STYLES onClick={onClose}>X</BUTTON_STYLES>
        {children}
      </MODAL_STYLES>
    </OVERLAY_STYLES>
  )
}