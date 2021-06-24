import React, { ReactElement } from 'react'

export interface AdminPanelProps {
  content: ReactElement
  navMenu: ReactElement
}

const AdminPanel = (props: AdminPanelProps) => {

  return (
    <div className="font-sans leading-normal tracking-normal flex flex-col md:flex-row bg-gray-100">
      <aside className="bg-gray-800 shadow-xl h-16 fixed bottom-0 md:relative md:h-screen z-10 w-full md:w-60 md:pt-4 md:px-4">
        {props.navMenu}
      </aside>
      <main className="main-content flex-1 pb-24 md:pb-5 md:pt-4 md:px-4">
        {props.content}
      </main>
    </div>
  )
}

export default AdminPanel
