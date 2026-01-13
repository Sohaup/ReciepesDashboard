import React from 'react'

export default function hocLoader(Component:React.ComponentType) {
  return (props:any) => {
    if (props.loading) {
        return "...LOading"
    } else if(props.error) {
        return "an error is oqaured"
    }

    return <Component {...props}/>
  }
}
