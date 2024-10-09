import React from 'react'
import ButtonAppBar from '../../component/header'

export default function MainLayOut({children}) {
  return (
    <div>
        <ButtonAppBar/>
        {children}
    </div>
  )
}
