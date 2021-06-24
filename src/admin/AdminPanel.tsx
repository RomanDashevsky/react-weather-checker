import React, { ReactElement } from 'react'

export interface AdminPanelProps {
  content: ReactElement
  navMenu: ReactElement
}

const AdminPanel = (props: AdminPanelProps) => {

  return (
    <div>
      <header>
        {props.navMenu}
      </header>
      <main>
        {props.content}
      </main>
    </div>
  )
}

export default AdminPanel
