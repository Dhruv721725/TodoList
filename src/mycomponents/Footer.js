import React from 'react'

export default function Footer() {
  let footerStyle={
    display : 'flex',
    position: 'fixed',
    bottom:'0',
    width: '100%',
    backGroundColor:'rgb(100,100,100)'
  }
  return (
    <div>
     <div className="card" style={footerStyle}>
        <div className="card-header">
          Featured
        </div>
      </div>
    </div>
  )
}
