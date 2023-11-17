import React from 'react'

//component
import Parent from './Parent'

const GrandParent = (prop) => {
  return (
    // <Parent value={prop.value} setValue={prop.setValue}/>
    <Parent/>
  )
}

export default GrandParent