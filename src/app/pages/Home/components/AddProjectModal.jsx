import { createPortal } from 'react-dom'

export default function AddProjectModal({ children }) {
  return createPortal(
    <div>{children}</div>,
    document.getElementById('add_project_modal')
  )
}
