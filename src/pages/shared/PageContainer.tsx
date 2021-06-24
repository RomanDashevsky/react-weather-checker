import React, { ReactElement } from 'react'

interface PageContainerProps {
  children: ReactElement;
}

const PageContainer = (props: PageContainerProps) => {
  return (
    <div className='container h-full flex flex-auto justify-center mx-auto'>
      {props.children}
    </div>
  )
}

export default PageContainer
