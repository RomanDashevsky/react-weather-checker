import React, { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer = (props: PageContainerProps) => {
  return (
    <div className='container h-full flex flex-auto justify-center mx-auto'>
      {props.children}
    </div>
  )
}

export default PageContainer
